"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Gps from "../ui/icons/gps";
import Location from "../ui/icons/locatin";
import { useRouter } from "next/navigation";
import LocationIconMap from "../ui/icons/location-iconMap";
import Button from "../ui/buttons/Button";


const LocationIcon = LocationIconMap;

function ZoomButtons() {
  const map = useMap();
  return (
      <div className="top-4 left-4 z-2000 absolute flex flex-col gap-2">
        <button
            className="bg-white shadow rounded-sm w-8 sm:w-10 h-8 sm:h-10 text-primary text-2xl cursor-pointer"
            onClick={() => map.zoomIn()}
        >
          +
        </button>
        <button
            className="bg-white shadow rounded-sm w-8 sm:w-10 h-8 sm:h-10 text-primary text-2xl cursor-pointer"
            onClick={() => map.zoomOut()}
        >
          -
        </button>
      </div>
  );
}

// دکمه GPS
function GpsButton({ setMarkerPos, setAddress }) {
  const map = useMap();
  const router = useRouter();
  const fetchAddress = async (lat, lng) => {
    try {
      const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=fa&addressdetails=1`
      );
      const data = await res.json();
      const exclude = [
        "district",
        "ISO3166-2-lvl4",
        "city",
        "state",
        "county",
        "country",
        "country_code",
        "state_district",
        "region",
        "province",
        "town",
        "municipality",
        "house_number",
        "postcode",
      ];
      const filtered = Object.fromEntries(
          Object.entries(data.address).filter(([key]) => !exclude.includes(key))
      );
      return Object.values(filtered).join(", ") || "آدرس جزئی پیدا نشد";
    } catch {
      return "خطا در دریافت آدرس";
    }
  };

  const handleClick = () => {
    if (!navigator.geolocation)
      return console.log("مرورگر از GPS پشتیبانی نمی‌کند");

    navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setMarkerPos([latitude, longitude]);
          router.push(`?lat=${latitude}&lng=${longitude}`);
          map.flyTo([latitude, longitude], 12);
          const addr = await fetchAddress(latitude, longitude);
          setAddress(addr);
        },
        (err) => console.log("دسترسی به GPS امکان‌پذیر نیست.", err),
        { enableHighAccuracy: true, timeout: 5000 }
    );
  };
  return (
        <Button
          onClick={handleClick}
            className="top-4 right-4 z-2010 font-estedad-regular absolute flex justify-center items-center shadow w-40 h-8 sm:h-10 cursor-pointer"
            style="stroke"
            iconRight={<Gps className="fill-primary w-4 sm:w-6" />}
        >
          موقعیت من
        </Button>
  );
}

export default function LeafletMap({
                                     onSelect,
                                     setStep,
                                     position,
                                     handleChange,
                                   }) {
  const iranBounds = [
    [24, 44],
    [40, 64],
  ];

  const [markerPos, setMarkerPos] = useState(null);
  const [address, setAddress] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    handleChange("lat", position[0]);
    handleChange("lng", position[1]);
    setStep(2);
  };
  // کلیک روی نقشه
  function LocationMarker() {
    const map = useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        if (
            lat < iranBounds[0][0] ||
            lat > iranBounds[1][0] ||
            lng < iranBounds[0][1] ||
            lng > iranBounds[1][1]
        )
          return console.log("لطفاً نقطه‌ای داخل ایران انتخاب کنید 🇮🇷");

        setMarkerPos([lat, lng]);
        router.push(`?lng=${lng}&lat=${lat}`);
        const fetchAddress = async () => {
          try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=fa&addressdetails=1`
            );
            const data = await res.json();
            const exclude = [
              "district",
              "ISO3166-2-lvl4",
              "city",
              "state",
              "county",
              "country",
              "country_code",
              "state_district",
              "region",
              "province",
              "town",
              "municipality",
              "house_number",
              "postcode",
            ];
            const filtered = Object.fromEntries(
                Object.entries(data.address).filter(
                    ([key]) => !exclude.includes(key)
                )
            );
            setAddress(Object.values(filtered).join(", ") || "آدرس پیدا نشد");
          } catch {
            setAddress("خطا در دریافت آدرس");
          }
        };
        fetchAddress();

        if (onSelect) onSelect([lat, lng]);
      },
    });

    return markerPos ? (
        <Marker position={markerPos} icon={LocationIcon}>
          <Popup>{`موقعیت: ${markerPos[0].toFixed(5)}, ${markerPos[1].toFixed(
              5
          )}`}</Popup>
        </Marker>
    ) : null;
  }

  return (
      <div className="relative w-full h-[calc(100dvh-136px)] sm:h-125.5">
        <MapContainer
            center={position}
            zoom={5.5}
            minZoom={5}
            zoomControl={false}
            maxBounds={iranBounds}
            style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />
          <GpsButton setMarkerPos={setMarkerPos} setAddress={setAddress} />
          <ZoomButtons />
        </MapContainer>

        {address && (
            <div className="bottom-18 absolute flex justify-center w-full">
              <div className="z-2000 flex items-center gap-1 bg-white shadow-cards-2 px-2 py-2.5 rounded w-80 sm:w-102 overflow-hidden text-right">
                <div className="w-4 sm:w-6">
                  <Location className={`sm:w-6 w-4 fill-primary grow`} />
                </div>
                <div className="font-estedad-regular text-xs sm:text-sm leading-[180%] whitespace-normal">
                  {address}
                </div>
              </div>
            </div>
        )}
        <div className="bottom-4 absolute flex justify-center w-full">
            <Button onClick={handleSubmit} className="z-2000 w-40 sm:w-68 h-8 sm:h-10 font-estedad-regular cursor-pointer">ثبت موقعیت</Button>
        </div>
      </div>
  );
}
