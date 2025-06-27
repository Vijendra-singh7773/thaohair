<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import Tesseract from 'tesseract.js';
  import { translateToHindi } from '$lib/utils/translate.js';
  import { speakHindi } from '$lib/utils/speech.js';

  // @ts-ignore
  /**
     * @type {HTMLCanvasElement}
     */
  // @ts-ignore
  let video, canvas, capturedImage = '', extractedText = '', result = '';
  let loading = false;
  let medicineInfo = '', translatedInfo = '', expiryStatus = '';
  let speaking = false;

  const medicineDatabase = {
    'PARACETAMOL': 'Pain reliever and fever reducer.',
    'AMOXICILLIN': 'Antibiotic used for bacterial infections.',
    'CETRIZINE': 'Used for cold, allergies, and sneezing.',
      'pantoprazole': 'Pantoprazole is a proton pump inhibitor (PPI) used to reduce stomach acid production, commonly prescribed for conditions like gastroesophageal reflux disease (GERD) and erosive esophagitis.',
  };

  onMount(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        // @ts-ignore
        video.srcObject = stream;
        // @ts-ignore
        video.play();
      })
      .catch(err => console.error('Camera access denied:', err));
  });

  function capture() {
    // @ts-ignore
    const ctx = canvas.getContext('2d');
    // @ts-ignore
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // @ts-ignore
    capturedImage = canvas.toDataURL('image/png');
    recognizeText();
  }

  async function recognizeText() {
    loading = true;
    extractedText = '';
    result = '';
    expiryStatus = '';
    medicineInfo = '';
    translatedInfo = '';

    const { data } = await Tesseract.recognize(capturedImage, 'eng');
    extractedText = data.text;

    checkExpiry(extractedText);
    await findMedicine(extractedText);

    loading = false;
  }

  /**
     * @param {string} text
     */
  function checkExpiry(text) {
    const expiryRegex = /(0[1-9]|1[0-2])\/(20\d{2})/g;
    const matches = text.match(expiryRegex);
    if (matches && matches.length > 0) {
      const [month, year] = matches[0].split('/');
      const expiryDate = new Date(`${year}-${month}-01`);
      const today = new Date();
      expiryStatus = expiryDate < today ? '❌ Expired' : '✅ Valid';
    } else {
      expiryStatus = '⚠️ Expiry date not found';
    }
  }

  /**
     * @param {string} text
     */
  async function findMedicine(text) {
    const upperText = text.toUpperCase();
    for (const med in medicineDatabase) {
      if (upperText.includes(med)) {
        // @ts-ignore
        medicineInfo = medicineDatabase[med];
        translatedInfo = await translateToHindi(medicineInfo);
        return;
      }
    }
    medicineInfo = '❓ Medicine not found in database';
  }

  function playHindi() {
    if (translatedInfo) {
      speakHindi(translatedInfo);
      speaking = true;
      setTimeout(() => speaking = false, 3000);
    }
  }
</script>

<div class="bg-white rounded-xl shadow-lg p-4 w-full md:w-[500px] space-y-4">
  <h2 class="text-2xl font-bold text-center">📸 Medicine Scanner</h2>

  <video bind:this={video} class="rounded-md w-full aspect-video"></video>

  <button on:click={capture} class="bg-indigo-600 text-white rounded-lg p-2 text-lg hover:bg-indigo-700 w-full">
    Capture & Scan
  </button>

  <canvas bind:this={canvas} width="640" height="480" class="hidden"></canvas>

  {#if capturedImage}
    <div>
      <h3 class="font-semibold">Captured Image:</h3>
      <img src={capturedImage} alt="Captured" class="rounded shadow-md w-full" />
    </div>
  {/if}

  {#if loading}
    <div class="text-indigo-600 font-semibold text-center">⏳ Scanning for text...</div>
  {:else if extractedText}
    <div class="space-y-2">
      <h3 class="font-semibold">📝 Extracted Text:</h3>
      <p class="bg-gray-100 p-2 rounded whitespace-pre-wrap">{extractedText}</p>

      <h3 class="font-semibold">📅 Expiry Status:</h3>
      <p class="bg-gray-100 p-2 rounded">{expiryStatus}</p>

      <h3 class="font-semibold">❓ Medicine Info (EN):</h3>
      <p class="bg-gray-100 p-2 rounded">{medicineInfo}</p>

      <h3 class="font-semibold">🌐 Hindi Translation:</h3>
      <p class="bg-yellow-100 p-2 rounded">{translatedInfo}</p>

      <button on:click={playHindi} class="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 w-full">
        🔊 सुनें हिंदी में
      </button>
    </div>
  {/if}
</div>
