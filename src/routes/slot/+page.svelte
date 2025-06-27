<script>
  // @ts-ignore
  import { onMount } from 'svelte';

  let currentMonthIndex = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  // @ts-ignore
  /**
     * @type {string | null}
     */
  let selectedDate = null;

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // @ts-ignore
  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  // @ts-ignore
  function getFirstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay(); // 0=Sun, 6=Sat
  }

  function previousMonth() {
    if (currentMonthIndex === 0) {
      currentMonthIndex = 11;
      currentYear--;
    } else {
      currentMonthIndex--;
    }
  }

  function nextMonth() {
    if (currentMonthIndex === 11) {
      currentMonthIndex = 0;
      currentYear++;
    } else {
      currentMonthIndex++;
    }
  }

  // @ts-ignore
  function selectDate(day) {
    selectedDate = `${day} ${months[currentMonthIndex]} ${currentYear}`;
  }

  function confirmBooking() {
    // @ts-ignore
    if (selectedDate) {
      window.open('tickit', );
    } else {
      alert('Please select a date first.');
    }
  }

  $: totalDays = daysInMonth(currentMonthIndex, currentYear);
  $: startDay = getFirstDayOfMonth(currentMonthIndex, currentYear);
  $: datesArray = Array(startDay).fill('').concat(Array.from({ length: totalDays }, (_, i) => i + 1));
</script>

<main class="min-h-screen bg-[#f3f4ff] p-6">
  <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

    <!-- Left: Information -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">Plan Your Visit</h1>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Book your haircut for the perfect time slot! Enjoy professional services with ease.
      </p>

      <div class="relative rounded-lg overflow-hidden mb-4 h-48">
      
        <h2 class="absolute bottom-2 left-2 text-xl font-bold text-white bg-black bg-opacity-50 px-2 rounded">ThaoHaircut</h2>
      </div>

      <div class="border rounded-lg bg-blue-50 p-4 mt-4">
        <h2 class="font-bold mb-2 text-center">Timings</h2>
        <div class="flex justify-between py-1 border-t border-gray-300 text-sm">
          <span class="font-medium">Weekdays</span><span>11:00 AM - 07:00 PM</span>
        </div>
        <div class="flex justify-between py-1 border-t border-gray-300 text-sm">
          <span class="font-medium">Weekends</span><span>11:00 AM - 07:00 PM</span>
        </div>
      </div>
    </div>

    <!-- Right: Calendar -->
    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-center mb-2">
          <button class="p-2 rounded hover:bg-gray-200" on:click={previousMonth}>&larr;</button>
          <h2 class="text-xl font-bold">{months[currentMonthIndex]} {currentYear}</h2>
          <button class="p-2 rounded hover:bg-gray-200" on:click={nextMonth}>&rarr;</button>
        </div>

        <div class="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-700 mb-2">
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>

        <div class="grid grid-cols-7 gap-2 text-center text-sm">
          {#each datesArray as day}
            <div
              class="h-10 flex items-center justify-center rounded cursor-pointer
                {day === '' ? 'bg-gray-200 cursor-default' :
                selectedDate === `${day} ${months[currentMonthIndex]} ${currentYear}` ? 'bg-blue-600 text-white' :
                'bg-green-300 hover:bg-green-400'}"
              on:click={() => day !== '' && selectDate(day)}
            >
              {day}
            </div>
          {/each}
        </div>
      </div>

      <button
        on:click={confirmBooking}
        class="mt-6 w-full py-3 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800"
      >
        CONFIRM BOOKING
      </button>

      {#if selectedDate}
        <p class="text-center mt-2 text-green-600 text-sm">Selected Date: {selectedDate}</p>
      {/if}
    </div>
  </div>
</main>
<!-- Footer -->
<footer class="bg-blue-600 text-white p-4 text-center">
  © 2025 ThaoHaircut | Book Smarter. Look Sharper.
</footer>
