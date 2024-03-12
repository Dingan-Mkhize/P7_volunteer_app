import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const londonBounds = [
  [51.28676, -0.510375], // Southwest coordinates
  [51.691874, 0.334015], // Northeast coordinates
];


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

const MapComponent = ({ initialPosition, zoomLevel, onMapClick, selectedLocation }) => {
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
    <div className="w-full" style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={initialPosition}
        zoom={zoomLevel}
        maxBounds={londonBounds}
        maxBoundsViscosity={1.0}
        maxZoom={18} // Example max zoom level
        minZoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <EventHandlers />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedLocation && (
          <Marker position={selectedLocation}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

MapComponent.propTypes = {
  initialPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoomLevel: PropTypes.number.isRequired,
  onMapClick: PropTypes.func.isRequired,
  selectedLocation: PropTypes.func.isRequired,
};

export default MapComponent;
