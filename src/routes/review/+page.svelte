<script>
  // @ts-ignore
  import { onMount } from 'svelte';
  let visitDate = '23 June 2025'; // Can be dynamic
  let ticketCount = 1;            // Pass from previous page
  let grandTotal = 700.0;         // Can be computed dynamically
  
  let fullName = '';
  let email = '';
  let phone = '';
  let state = '';
  let city = '';
  let pincode = '';

  let states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh'];
  let cities = {
    Delhi: ['New Delhi', 'Dwarka'],
    Maharashtra: ['Mumbai', 'Pune'],
    Karnataka: ['Bengaluru', 'Mysore'],
    'Tamil Nadu': ['Chennai', 'Coimbatore'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur']
  };

  // @ts-ignore
  /**
     * @type {any[]}
     */
  let availableCities = [];

  // @ts-ignore
  function onStateChange(event) {
    state = event.target.value;
    // @ts-ignore
    availableCities = cities[state] || [];
  }

  function proceedToPay() {
    if (fullName && email && phone && state && city && pincode) {
      alert('Proceeding to Payment!');
      // Example: window.location.href = '/payment';
    } else {
      alert('Please fill all mandatory fields!');
    }
  }
</script>

<div class="min-h-screen bg-indigo-50 p-6 md:p-10 text-gray-800">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <!-- Left: Review Booking -->
    <div class="bg-white rounded-2xl shadow-md p-6 space-y-4">
      <button class="text-lg font-semibold mb-2">&larr; Review Booking</button>
      <div class="border rounded-lg p-4 flex justify-between items-center">
        <div>
          <p class="text-gray-500">Date of Visit</p>
          <h2 class="text-xl font-bold">{visitDate}</h2>
        </div>
        <div>
          <p class="text-gray-500">Visitors</p>
          <div class="flex items-center gap-1 text-lg font-semibold">
            👤 {ticketCount}
          </div>
        </div>
      </div>
      <div class="border-t pt-4 text-xl font-semibold flex justify-between">
        <span>Grand Total <span class="text-xs text-gray-500">(GST Included 18%)</span></span>
        <span>₹{grandTotal.toFixed(2)}</span>
      </div>
    </div>

    <!-- Right: Billing Info -->
    <div class="bg-white rounded-2xl shadow-md p-6 space-y-4">
      <h2 class="text-xl font-bold">Add Your Billing Information</h2>
      <p class="text-sm text-gray-600">*All fields are mandatory to be filled with relevant information.</p>

      <input type="text" placeholder="Full Name *" bind:value={fullName} class="w-full rounded-lg border px-3 py-2" />
      <input type="email" placeholder="Email Id *" bind:value={email} class="w-full rounded-lg border px-3 py-2" />
      
      <div class="relative">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">+91</span>
        <input type="tel" placeholder="Enter phone number *" bind:value={phone} class="w-full rounded-lg border px-3 py-2 pl-12" />
      </div>

      <select bind:value={state} on:change={onStateChange} class="w-full rounded-lg border px-3 py-2">
        <option value="">Select State *</option>
        {#each states as st}
          <option value={st}>{st}</option>
        {/each}
      </select>

      <div class="grid grid-cols-2 gap-2">
        <select bind:value={city} class="rounded-lg border px-3 py-2 w-full">
          <option value="">Select City *</option>
          {#each availableCities as c}
            <option value={c}>{c}</option>
          {/each}
        </select>
        <input type="text" placeholder="Pincode *" bind:value={pincode} class="rounded-lg border px-3 py-2 w-full" />
      </div>

      <p class="text-xs text-gray-500 mt-2">By proceeding further, you agree to all our 
        <a href="#" class="underline font-medium">T&Cs</a> and 
        <a href="#" class="underline font-medium">Privacy Policy</a>.
      </p>

      <button 
        class="w-full bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-2 font-semibold text-lg"
        on:click={proceedToPay}
      >
        PROCEED TO PAY
      </button>
    </div>
  </div>
</div>
