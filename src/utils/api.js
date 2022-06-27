export const baseURL = 'https://api.shrtco.de/v2/';

export const fetchShortUrl = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}