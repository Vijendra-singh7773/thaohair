

<script>
// @ts-nocheck

    import { goto } from "$app/navigation";


    // @ts-ignore
    import Nav from "../components/Nav.svelte";
   
     import VisitPlan from "../components/VisitPlan.svelte";
     import CameraScanner from "../components/CameraScanner.svelte";
   

  /**
     * @type {null}
     */
  let selectedDate = null;

  


 
  let search = '';
  let featuredPlaces = [
    { name: 'Jaipur Fort', city: 'Jaipur', image: '/jaipur.jpg', slug: 'jaipur-fort' },
    { name: 'Udaipur Fort', city: 'Udaipur', image: '/udaipur.jpg', slug: 'udaipur-fort' },
    { name: 'Mehrangarh Fort', city: 'Jodhpur', image: '/jodhpur.jpg', slug: 'mehrangarh-fort' },
  ];

  function handleSearch() {
    if (search.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(search.trim())}`;
    }
  }




  


    let from = "";
  let to = "";
  let showResult = false;
  let distance = "";
  let fare = "";

  // Simulated distance and fare calculator
  function calculate() {
    showResult = true;

    // Simple mock distance (e.g., based on input length)
    const fakeKm = Math.max(2, (from.length + to.length) % 10);
    distance = `${fakeKm} km`;
    fare = `₹${fakeKm * 18}`;
  }


</script>


<main class=" bg-gradient-to-br from-orange-50 to-indigo-50 w-full">
    
     <Nav />
   
   
 





<section class="min-h-screen  py-10 px-4">
  <h1 class="text-4xl font-bold text-center mb-6 text-blue-800">🌏 Explore India with BharatExplore</h1>

  <!-- Search Input -->
  <div class="flex justify-center mb-10">
    <input
      type="text"
      placeholder="Search for a city or place "
      bind:value={search}
      class="w-full max-w-xl px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-400"
    />
    <button
      on:click={handleSearch}
      class="px-6 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition"
    >
      Search
    </button>
  </div>

  <!-- Featured Places Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {#each featuredPlaces as place}
      <div class="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <img src={place.image} alt={place.name} class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-bold">{place.name}</h2>
          <p class="text-gray-600">{place.city}</p>
          <a
            href={`/location/${place.slug}`}
            class="mt-2 inline-block text-blue-600 font-medium hover:underline"
          >
            View Details →
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>




<div class="min-h-screen p-6">
  <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 space-y-6">
    <h1 class="text-3xl font-bold text-center text-indigo-700">🚕 Travel Planner</h1>
    <p class="text-center text-gray-600">Plan your travel with real-time distance, route details, and local auto fare estimates</p>

    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-semibold mb-1"></label>
        <input type="text" bind:value={from} placeholder="Starting Location" class="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      </div>

      <div>
        <label class="block text-sm font-semibold mb-1"></label>
        <input type="text" bind:value={to} placeholder="Destination" class="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      </div>
    </div>

    <div class="text-center">
      <button on:click={calculateRoute} class="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition">
        🔍 Calculate Travel Info
      </button>
    </div>

    {#if distance}
      <div class="text-center mt-6 bg-indigo-100 text-indigo-800 rounded-xl p-4">
        <p><strong>Distance:</strong> {distance}</p>
        <p><strong>Estimated Auto Fare:</strong> {autoFare}</p>
      </div>
    {/if}
  </div>
</div>









<!-- src/routes/about/+page.svelte -->

<section class="min-h-screen  py-16 px-6">
  <div class="max-w-5xl mx-auto">
    
    <!-- Heading -->
    <h1 class="text-5xl font-extrabold text-center text-indigo-700 mb-10">
      About <span class="text-orange-600">Bharat Explore</span>
    </h1>

    <!-- Intro Text -->
    <div class="text-center text-gray-800 text-lg leading-relaxed mb-12 space-y-4">
      <p><strong>Bharat Explore</strong> is your guide to exploring India’s beauty — from historic forts to spiritual shrines and hidden rural gems.</p>
      <p>We aim to make travel planning seamless, informative, and localized, including real-time distance, routes, local auto fares, and facilities.</p>
      <p>Crafted with ❤️ using <span class="font-semibold text-indigo-700">SvelteKit</span> and <span class="font-semibold text-indigo-700">Tailwind CSS</span>, this platform is proudly made in 🇮🇳 India.</p>
    </div>

    <!-- Team Cards -->
    <div class="grid md:grid-cols-2 gap-8 mt-10">
      <div class="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6 hover:shadow-2xl transition duration-300">
        <img src="viju.jpg" alt="Vijendra Singh" class="w-20 h-20 rounded-full border-4 border-indigo-300" />
        <div>
          <h2 class="text-xl font-bold text-indigo-700">Vijendra Singh</h2>
          <p class="text-gray-500 text-sm">Founder & Designer</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6 hover:shadow-2xl transition duration-300">
        <img src="logo.png" alt="Project Bharat" class="w-20 h-20 rounded-full border-4 border-orange-300" />
        <div>
          <h2 class="text-xl font-bold text-orange-600"> Bharat Explore</h2>
          <p class="text-gray-500 text-sm">Travel Discovery Platform</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <a href="/explore" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition">
        🌏 Start Exploring
      </a>
    </div>

  </div>
</section>





<!-- src/routes/contact/+page.svelte -->

<section class="min-h-screen  py-16 px-6">
  <div class="max-w-4xl mx-auto">
    
    <!-- Header -->
    <h1 class="text-4xl font-extrabold text-center text-indigo-700 mb-4">Contact Us</h1>
    <p class="text-center text-gray-600 text-lg mb-10">We'd love to hear from you! Reach out with any questions, suggestions, or collaborations.</p>

    <!-- Contact Form -->
    <form class="bg-white shadow-xl rounded-2xl p-8 space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" name="name" placeholder="Your full name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 outline-none" required />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" name="email" placeholder="you@example.com" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 outline-none" required />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea name="message" rows="5" placeholder="Type your message..." class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 outline-none" required></textarea>
      </div>

      <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300">
        ✉️ Send Message
      </button>
    </form>

    <!-- Contact Info -->
    <div class="mt-12 text-center text-gray-700">
      <p class="mb-2">📧 Email: <span class="font-medium text-indigo-600">contact@bharatexplore-travel.in</span></p>
      <p class="mb-2">📍 Location: Jaipur, Rajasthan, India</p>
      <p>🌐 Website: <a href="/" class="text-indigo-600 hover:underline">www.bharatexplore-travel.in</a></p>
    </div>
  </div>
</section>


    





<footer class="bg-gradient-to-br from-orange-50 to-indigo-50 text-gray-800 mt-16">
  <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    <!-- Logo and Title -->
    <div>
      <h2 class="text-2xl font-bold text-indigo-600 mb-2">Bharat Explore</h2>
      <p class="text-sm text-gray-600">Discover the beauty and culture of India. Explore forts, temples, and hidden gems.</p>
    </div>

    <!-- Quick Links -->
    <div>
      <h3 class="text-lg font-semibold mb-2 text-indigo-700">Quick Links</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="/" class="hover:text-indigo-500">Home</a></li>
        <li><a href="/explore" class="hover:text-indigo-500">Explore</a></li>
        <li><a href="/map" class="hover:text-indigo-500">Live Map</a></li>
        <li><a href="/about" class="hover:text-indigo-500">About</a></li>
      </ul>
    </div>

    <!-- Travel Themes -->
    <div>
      <h3 class="text-lg font-semibold mb-2 text-indigo-700">Popular Themes</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="#" class="hover:text-indigo-500">Heritage Sites</a></li>
        <li><a href="#" class="hover:text-indigo-500">Religious Places</a></li>
        <li><a href="#" class="hover:text-indigo-500">Adventure Spots</a></li>
        <li><a href="#" class="hover:text-indigo-500">Food & Culture</a></li>
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <h3 class="text-lg font-semibold mb-2 text-indigo-700">Contact Us</h3>
      <p class="text-sm text-gray-600">Email: support@bharatexploretravel.in</p>
      <p class="text-sm text-gray-600">Phone: +91 6375107576</p>
      <div class="flex space-x-3 mt-2">
        <a href="#" class="hover:text-indigo-500">🌐</a>
        <a href="#" class="hover:text-indigo-500">📸</a>
        <a href="#" class="hover:text-indigo-500">🎥</a>
      </div>
    </div>

  </div>

  <!-- Bottom Note -->
  <div class="text-center text-xs py-4 border-t border-gray-200 text-gray-500">
    © 2025 Bharat Explore Travel. All rights reserved.
  </div>
</footer>



</main>