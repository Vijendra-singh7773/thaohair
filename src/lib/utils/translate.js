import axios from 'axios';

/**
 * @param {any} text
 */
export async function translateToHindi(text) {
  try {
    const response = await axios.post('https://libretranslate.de/translate', {
      q: text,
      source: 'en',
      target: 'hi',
      format: 'text'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data.translatedText;
  } catch (err) {
    console.error('Translation Error:', err);
    return '❗ Translation failed';
  }
}
