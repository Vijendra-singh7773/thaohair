// @ts-nocheck
import data from "../data/medicines.json";

/**
 * @param {string} text
 */
export function findMedicineLocal(text) {
  const upper = text.toUpperCase();
  // @ts-ignore
  const found = data.find(item => upper.includes(item.name));
  return found ? found.info : null;
}
