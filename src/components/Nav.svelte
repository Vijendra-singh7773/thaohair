<script>
  import { user, logout } from "$lib/firebase";
  import { onDestroy } from "svelte";

  let isMenuOpen = false;
  let isHenuOpen = false
  let isProfileOpen = false;
  let isServicesOpen = false;
  /**
     * @type {null}
     */
  let currentUser = null;

  const toggleMenu = () => (isMenuOpen = !isMenuOpen);
  const toggleHenu = () => (isHenuOpen = !isHenuOpen);
  const toggleProfile = () => (isProfileOpen = !isProfileOpen);
  const toggleServices = () => (isServicesOpen = !isServicesOpen);

  const unsubscribe = user.subscribe((u) => {
    currentUser = u;
  });

  onDestroy(() => {
    unsubscribe();
  });

   import { language } from '$lib/index';
  let currentLang = 'en';

  $: language.set(currentLang);
</script>
<!-- first header -->
<header class="bg-[#f9f8f8] shadow-md sticky top-0 z-50">
  <nav class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
    
   <!-- Left: Logo -->
  <img src="/logo.png" alt="Laptop Sale" class="w-40" />
   <div class="hidden md:flex space-x-6 items-center">
      <a href="/" class="hover:text-blue-500">Home</a>
      <a href="/slot" target="_blank" class="hover:text-blue-500">Destinations</a>
   
      <a href="/about" class="hover:text-blue-500">About</a>
      <a href="/nearby"    target="_blank"  class="hover:text-blue-500">Contact</a>
   </div>
    <!-- Desktop Menu -->
 

    <!-- Right: Profile/Login (Desktop) -->
    <div class="hidden md:flex items-center space-x-4">
      {#if currentUser}
        <div class="relative">
          <button on:click={toggleProfile} class="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span class="text-white">👤</span>
          </button>
          {#if isProfileOpen}
            <ul class="absolute right-0 mt-20 w-48 bg-white rounded-md shadow-lg z-10">
             
              <li><a href="/saved-movers" class="block px-4 py-2">My Profile</a></li>
              <li><a href="/settings" class="block px-4 py-2 ">Settings</a></li>
              <li><button on:click={logout} class="block px-4 py-2 w-full text-left">Logout</button></li>
            </ul>
          {/if}
        </div>
      {:else}
        <a href="/login" class="px-4 py-2 border rounded-lg  text-black ">Login</a>
        <a href="/signup" class="px-4 py-2  text-black rounded-lg ">Sign Up</a>
      {/if}
    </div>

    <!-- Mobile Menu Button -->
    <button on:click={toggleMenu} class="md:hidden p-2 bg-white rounded-md">
      ☰
    </button>
    
  </nav>

  <!-- Mobile Menu -->

  
  {#if isMenuOpen}
    <div class="md:hidden px-4 pb-4 bg-white space-y-3">
   



     
    

      <!-- Profile/Login (Mobile) -->
      {#if currentUser}
        <div class="mt-4 border-t pt-4 space-y-2">
          <a href="/" class="block ">Home</a>
      
              
                  
                          <a href="/settings" class="block "> Destinations</a>
                             <a href="/settings" class="block ">About</a>
                              <a href="/settings" class="block "> Contact</a>
    
          <button on:click={logout} class="block text-left w-full ">Logout</button>
        </div>
      {:else}
        <div class="mt-4 space-y-2">
          <a href="/login" class="block px-4 py-2  bg-white text-black   ">Login</a>
          <a href="/signup" class="block px-4 py-2 bg-white text-black  ">Sign Up</a>
        </div>
      {/if}
    </div>
  {/if}
</header>
