import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";

function MyMap(): JSX.Element {
  const initialPosition: [number, number] = [39.9283889, 32.8528056];

    // Özel bir ikon oluşturun
    const customIcon = new L.Icon({
        iconUrl: "images/logo/logo.png", // Kullanmak istediğiniz ikonun URL'si
        iconSize: [96, 96], // İkon boyutunu ayarlayın
        iconAnchor: [16, 32], // İkonun gösterimini ayarlayın
        popupAnchor: [0, -32], // Açılır pencerenin konumunu ayarlayın
      })

  return (
    <div className="rounded-3xl" style={{ width: "100%" }}>
      <MapContainer
        center={initialPosition}
        zoom={18}
        style={{ height: "350px", width: "350px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[39.9283889, 32.8528056]} icon={customIcon}>
          <Popup>Merhaba, burası benim konumum.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
