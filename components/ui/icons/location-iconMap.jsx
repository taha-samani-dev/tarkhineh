import L, { latLng } from "leaflet";
const LocationIconMap = L.divIcon({
  html: `<div style="width:48px;height:64px;">
    <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.24 16.9C39.14 7.66 31.08 3.5 24 3.5C16.92 3.5 8.84 7.64 6.74 16.88C4.4 27.2 10.72 35.94 16.44 41.44C18.56 43.48 21.28 44.5 24 44.5C26.72 44.5 29.44 43.48 31.54 41.44C37.26 35.94 43.58 27.22 41.24 16.9ZM24 26.92C20.52 26.92 17.7 24.1 17.7 20.62C17.7 17.14 20.52 14.32 24 14.32C27.48 14.32 30.3 17.14 30.3 20.62C30.3 24.1 27.48 26.92 24 26.92Z" fill="#417F56"/>
      <circle cx="24" cy="60" r="4" fill="#417F56"/>
    </svg>
  </div>`,
  iconSize: [48, 64],
  iconAnchor: [24, 64], // نوک پایین روی نقطه
  className: "",
});
export default LocationIconMap