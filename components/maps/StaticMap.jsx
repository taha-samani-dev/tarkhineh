"use client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationIconMap from "../ui/icons/location-iconMap";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

export default function StaticMap({ position = [35.6892, 51.389] }) {
  return (
    <div className="rounded-lg w-full h-full min-h-[200px]">
      <MapContainer
        center={position}
        zoom={16}
        zoomControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        <Marker
          position={position}
          icon={LocationIconMap}
          interactive={false}
        />
      </MapContainer>
    </div>
  );
}
