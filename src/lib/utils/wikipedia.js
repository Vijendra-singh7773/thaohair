// @ts-nocheck
import axios from 'axios';

export async function getMedicineInfoFromWikipedia(medicineName) {
  try {
    const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(medicineName)}`);
    return response.data.extract || '❗ Information not found';
  } catch (err) {
    console.error('Wikipedia API Error:', err);
    return '❗ Unable to fetch info';
  }
}
