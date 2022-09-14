import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function CowPage() {
  const params = useParams();
  console.log(params);
  const position = [51.505, -0.09];

  return (
    <div className="CowPage">
      <div className="map">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
