<script lang="ts">
  import { auth, db, provider } from '$lib/firebase';
  import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
  import { doc, setDoc } from 'firebase/firestore';
  import { goto } from '$app/navigation';
  

  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let error = '';

  const signup = async () => {
    error = '';
    if (!name || !email || !password || !confirmPassword) {
      error = 'Please fill in all fields.';
      return;
    }
    if (password !== confirmPassword) {
      error = 'Passwords do not match.';
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date().toISOString()
      });

      goto('/');
    } catch (e) {
      error = e.message;
    }
  };

  const signupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        createdAt: new Date().toISOString()
      });

      goto('/');
    } catch (e) {
      error = e.message;
    }
  };
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md animate-fade-in">
    <h2 class="text-3xl font-bold mb-6 text-center text-blue-600">Create Account</h2>

    {#if error}
      <div class="mb-4 text-red-500 text-sm text-center">{error}</div>
    {/if}

    <div class="mb-4">
      <label class="block text-sm mb-1" for="name">Name</label>
      <input
        id="name"
        type="text"
        bind:value={name}
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Name"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm mb-1" for="email">Email</label>
      <input
        id="email"
        type="email"
        bind:value={email}
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="you@example.com"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm mb-1" for="password">Password</label>
      <input
        id="password"
        type="password"
        bind:value={password}
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="••••••••"
      />
    </div>

    <div class="mb-6">
      <label class="block text-sm mb-1" for="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        bind:value={confirmPassword}
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="••••••••"
      />
    </div>

    <button
      on:click={signup}
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
    >
      Create Account
    </button>

    <div class="my-4 text-center text-gray-400">or</div>

    <button
      on:click={signupWithGoogle}
      class="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg transition"
    >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
      Sign up with Google
    </button>

    <p class="mt-6 text-sm text-center text-gray-600">
      Already have an account?
      <a href="/login" class="text-blue-500 hover:underline">Sign in</a>
    </p>
  </div>
</div>

<style>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
</style>
