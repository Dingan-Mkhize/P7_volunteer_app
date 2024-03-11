import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Set up the icon properties with Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ initialPosition, zoomLevel, onMapClick }) => {
  console.log("MapComponent props:", { initialPosition, zoomLevel }); 
  // Define map event handling inside the component
  const EventHandlers = () => {
    useMapEvents({
      click: (e) => {
        onMapClick(e.latlng);
      },
    });
    return null;
  };

  return (
    <div
      className="w-full" style={{ height: "400px", width: "100%" }}
    >
      <MapContainer
        center={initialPosition}
        zoom={zoomLevel}
        style={{ height: "100%", width: "100%" }}
      >
        <EventHandlers />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

MapComponent.propTypes = {
  initialPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoomLevel: PropTypes.number.isRequired,
  onMapClick: PropTypes.func.isRequired,
};

export default MapComponent;
