

<script>
    import { goto } from "$app/navigation";


    // @ts-ignore
    import Nav from "../components/Nav.svelte";
   
     import VisitPlan from "../components/VisitPlan.svelte";
     import CameraScanner from "../components/CameraScanner.svelte";
   

  /**
     * @type {null}
     */
  let selectedDate = null;

  


 


</script>


<main class=" bg-white to-[#fffceb] w-full">
    
     <Nav />
   
   
 



<script>
  import Navbar from '$components/Navbar.svelte';
</script>

   <!--Home-->

<section class="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col justify-center items-center text-center p-6">
  <h1 class="text-5xl font-extrabold text-blue-600 mb-4">✂️ Welcome to <span class="text-orange-500">ThaoHaircut</span></h1>
  <p class="text-lg text-gray-700 mb-6 max-w-xl">
    Book your haircut easily with real-time availability and instant confirmation. Get styled by expert barbers at your convenience.
  </p>
  <a href="/bookings" class="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition">
    Book Your Slot Now
  </a>
</section>

<!-- Features Section -->
<section class="py-16 bg-white text-center">
  <h2 class="text-3xl font-bold text-gray-900 mb-8">Why Choose ThaoHaircut?</h2>
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div class="p-6 bg-blue-50 rounded-lg shadow">
      <h3 class="text-xl font-semibold text-blue-600 mb-2">📅 Easy Booking</h3>
      <p class="text-gray-700">Choose your preferred time and barber in just a few clicks.</p>
    </div>
    <div class="p-6 bg-blue-50 rounded-lg shadow">
      <h3 class="text-xl font-semibold text-blue-600 mb-2">✂️ Skilled Barbers</h3>
      <p class="text-gray-700">Get a haircut from professionals with years of experience.</p>
    </div>
    <div class="p-6 bg-blue-50 rounded-lg shadow">
      <h3 class="text-xl font-semibold text-blue-600 mb-2">⚡ Instant Confirmation</h3>
      <p class="text-gray-700">Real-time shop status and booking confirmation.</p>
    </div>
  </div>
</section>




   <!--About-->
<section class="min-h-[50vh] flex flex-col justify-center items-center bg-blue-50 text-center px-4">
  <h1 class="text-5xl font-extrabold text-blue-800 mb-4">About <span class="text-orange-500">ThaoHaircut</span></h1>
  <p class="text-lg text-gray-700 max-w-2xl">
    ThaoHaircut is your go-to destination for professional haircuts with a modern twist.
  </p>
</section>

<!-- About Details -->
<section class="py-16 bg-white text-gray-800 text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
    <p class="text-lg mb-8">
      At ThaoHaircut, our mission is to simplify your haircut experience by providing real-time booking, expert barbers, and excellent service — all from your phone.
    </p>

    <h2 class="text-3xl font-bold mb-6 text-gray-900">Why Choose Us?</h2>
    <ul class="text-left list-disc list-inside text-lg max-w-xl mx-auto mb-8 text-gray-700">
      <li>✔ Professional and skilled barbers</li>
      <li>✔ Instant online booking with real-time slot availability</li>
      <li>✔ Clean, stylish, and modern salon space</li>
      <li>✔ Real-time shop open/close tracking</li>
      <li>✔ Customer-first approach, every time</li>
    </ul>

    <a href="/bookings" class="inline-block px-6 py-3 bg-orange-500 text-white text-lg rounded-lg shadow hover:bg-orange-600 transition">
      Book Your Slot Now
    </a>
  </div>
</section>





<!-- Footer -->
<footer class="bg-blue-600 text-white p-4 text-center">
  © 2025 ThaoHaircut | Book Smarter. Look Sharper.
</footer>

    
</main>





