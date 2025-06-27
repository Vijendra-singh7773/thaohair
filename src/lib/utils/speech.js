/**
 * @param {string | undefined} text
 */
export function speakHindi(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'hi-IN';
  utter.rate = 1;
  speechSynthesis.speak(utter);
}
