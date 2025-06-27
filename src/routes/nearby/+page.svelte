<script>
  import { onMount } from 'svelte';

  // @ts-ignore
  let mapDiv;
  let selectedDate = '';
  let selectedTime = '';

  let timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];

function confirmBooking() {
  window.open('/confirmation', '_blank');
}

  onMount(() => {
    const initMap = () => {
      const location = { lat: 28.6139, lng: 77.2090 }; // Example: New Delhi
      // @ts-ignore
      const map = new google.maps.Map(mapDiv, {
        zoom: 14,
        center: location
      });

      const request = {
        location,
        radius: '1500',
        type: ['hair_care']
      };

      // @ts-ignore
      const service = new google.maps.places.PlacesService(map);
      // @ts-ignore
      service.nearbySearch(request, (results, status) => {
        // @ts-ignore
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // @ts-ignore
          results.forEach(place => {
            // @ts-ignore
            new google.maps.Marker({
              map,
              position: place.geometry.location,
              title: place.name
            });
          });
        }
      });
    };

    // @ts-ignore
    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places&callback=initMap`;
      script.async = true;
      // @ts-ignore
      window.initMap = initMap;
      document.body.appendChild(script);
    }
  });
</script>

<main class="min-h-screen bg-gray-50 text-gray-800">
  <h1 class="text-4xl font-bold text-center text-blue-800 py-6">Nearby Haircut Shops</h1>
  <div bind:this={mapDiv} class="w-full h-[400px] rounded-lg shadow mx-auto max-w-5xl"></div>

  <!-- Booking Form -->
  <section class="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Book Your Slot</h2>

   



    <button on:click={confirmBooking} class="w-full py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
      select Slot
    </button>
  </section>
</main>

<footer class="bg-blue-600 text-white p-4 text-center mt-10">
  © 2025 ThaoHaircut | Book Smarter. Look Sharper.
</footer>
