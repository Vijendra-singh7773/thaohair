<script lang="ts">
    import { auth, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, provider } from '$lib/firebase';
    import { goto } from '$app/navigation';
    let email = '';
    let password = '';
    let error = '';
  
    const loginWithEmail = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        goto('/');
      } catch (e) {
        error = e.message;
      }
    };
  
    const loginWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Google login:", result.user);
        goto('/');
      } catch (e) {
        error = e.message;
      }
    };
   
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
  
      {#if error}
        <div class="mb-4 text-red-500 text-sm">{error}</div>
      {/if}
  
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
  
      <button
        on:click={loginWithEmail}
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mb-4"
      >
        Login with Email
      </button>
  
      <button
        on:click={loginWithGoogle}
        class="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
      >
        Login with Google
      </button>
  
      <p class="mt-4 text-sm text-center text-gray-600">
        Don’t have an account? <a href="/signup" class="text-blue-500 hover:underline">Sign Up</a>
      </p>
    </div>
  </div>
  