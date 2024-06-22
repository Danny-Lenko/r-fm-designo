import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { LatLngTuple, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const ICON = icon({
  iconUrl: "/marker-icon-2x.png",
  iconSize: [22, 32],
});

const Map = ({
  coords,
  address,
  city,
}: {
  coords: number[];
  address?: string;
  city: string;
}) => {
  return (
    <MapContainer
      center={coords as LatLngTuple}
      zoom={6}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={coords as LatLngTuple}>
        <Popup>
          {address}. <br /> {city}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
