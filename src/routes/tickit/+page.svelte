<script>
  let ticketCount = 0;
  const pricePerTicket = 700;
  let couponCode = '';
  let discount = 0;

  const validCoupons = {
    FUN20: 0.2, // 20% off
  };

  function increment() {
    ticketCount++;
  }

  function decrement() {
    if (ticketCount > 0) ticketCount--;
  }

  function applyCoupon() {
    const code = couponCode.trim().toUpperCase();
    // @ts-ignore
    if (validCoupons[code]) {
      // @ts-ignore
      discount = validCoupons[code];
      alert(`Coupon Applied: ${discount * 100}% OFF`);
    } else {
      discount = 0;
      alert("Invalid Coupon Code");
    }
  }

  $: totalPrice = ticketCount * pricePerTicket * (1 - discount);

  function confirmBooking() {
    if (ticketCount > 0) {
      alert(`Booking Confirmed!\nTickets: ${ticketCount}\nTotal Price: ₹${totalPrice.toFixed(2)}`);
      // Example for next step → navigate to /confirmation page
      // window.location.href = '/confirmation';
    }
  }
</script>

<div class="min-h-screen bg-indigo-50 p-6 md:p-10 text-gray-800">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 shadow">

    <!-- Left Section -->
    <div>
      <button class="mb-4 text-lg font-semibold">&larr; Grab Your Tickets</button>
      <p class="text-gray-600 mb-4">
        Save more on your tickets with our exclusive discount coupons! Apply a valid coupon code at checkout to enjoy special discounts on your bookings.
      </p>
      <h2 class="text-xl font-bold text-purple-700 mb-2">Trending Coupons</h2>
      <p class="text-gray-500 text-sm mb-4">(Click to apply)</p>

      <div class="flex gap-4 items-center">
        <img 
          src="/ticket-coupon.png" 
          alt="Ticket Coupon" 
          class="rounded-xl shadow-md cursor-pointer w-64"
          on:click={() => couponCode = 'FUN20'}
        />
      </div>
    </div>

    <!-- Right Section -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Select Your Tickets</h2>
      <p class="text-gray-600">Choose the number of tickets you would like to book for your visit.</p>

      <div>
        <h3 class="font-semibold mb-1">Adult Amusement Tickets (Above 4.5 ft)</h3>
        <div class="flex items-center border rounded-full px-4 py-2 w-fit gap-4">
          <button on:click={decrement} class="text-xl font-bold">-</button>
          <span class="text-lg">{ticketCount}</span>
          <button on:click={increment} class="text-xl font-bold">+</button>
        </div>
      </div>

      <div class="flex gap-2">
        <input
          class="w-full rounded-lg border px-3 py-2"
          type="text"
          placeholder="Enter coupon code"
          bind:value={couponCode}
        />
        <button on:click={applyCoupon} class="bg-gray-400 text-white px-4 rounded-lg">Apply</button>
      </div>

      <div class="bg-indigo-100 rounded-lg p-4 text-gray-700 space-y-2">
        <div class="flex justify-between">
          <span>Price per Ticket <span class="text-xs">(GST Included 18%)</span></span>
          <span>₹{pricePerTicket.toFixed(2)}</span>
        </div>
        <div class="flex justify-between font-semibold text-lg">
          <span>Total Price</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button
        class="w-full rounded-lg py-2 text-white font-semibold text-lg transition 
               {ticketCount === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}"
        on:click={confirmBooking}
        disabled={ticketCount === 0}
      >
        CONFIRM
      </button>
    </div>

  </div>
</div>



<!-- Footer -->
<footer class="bg-blue-600 text-white p-4 text-center">
  © 2025 ThaoHaircut | Book Smarter. Look Sharper.
</footer>