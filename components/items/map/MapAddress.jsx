"use client"
import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import L from "leaflet";

export default function MapAddress() {
    const position = [30.005493, 31.477898]

    const markerIcon = L.divIcon({
        html: `
                <div style="transform: translate(-50%, -100%)">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.79299 4.79287C9.22108 1.36478 14.779 1.36478 18.2071 4.79287C21.635 8.22097 21.6351 13.7789 18.2071 17.2069L12.7071 22.7069C12.5196 22.8944 12.2652 22.9999 12 22.9999C11.7349 22.9999 11.4805 22.8944 11.293 22.7069L5.79299 17.2069C2.3649 13.7788 2.3649 8.22096 5.79299 4.79287ZM12 9.4999C11.1716 9.4999 10.5 10.1715 10.5 10.9999V11.0097C10.5002 11.838 11.1717 12.5097 12 12.5097H12.0098C12.838 12.5095 13.5096 11.8379 13.5098 11.0097V10.9999C13.5098 10.1716 12.8381 9.50006 12.0098 9.4999H12Z"
                    fill="#292929"/>
                </svg>
                </div>
            `,
        className: "", 
    });

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon} />
           
        </MapContainer>
    )
}
