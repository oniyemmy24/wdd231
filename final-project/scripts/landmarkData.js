// modules/landmarkData.js
export async function loadLandmarks(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to load landmark data');
  return await res.json();
}
