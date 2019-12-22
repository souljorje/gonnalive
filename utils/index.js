export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

export const readingTime = (text) => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} minute read`;
};

export const hasHttp = (url) => url.includes('http://');
export const appendHttp = (url) => (hasHttp(url) ? url : `http://${url}`);

export { default as throttle } from 'lodash.throttle';
export { default as debounce } from 'lodash.debounce';
