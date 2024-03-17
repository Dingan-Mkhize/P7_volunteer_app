import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

const MapComponent = ({
  position,
  zoomLevel,
  onMapClick,
  jobs = [],
  selectionMode = false,
  title,
}) => {
  console.log("MapComponent received position:", position);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, zoomLevel);
    }
  }, [position, zoomLevel]);

  return (
    <div className="w-full" style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={zoomLevel}
        maxZoom={18}
        minZoom={10}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {selectionMode && position && (
          <Marker
            position={position}
            draggable={true}
            eventHandlers={{ dragend: (e) => onMapClick(e.target.getLatLng()) }}
          >
            <Popup>{title}</Popup>
          </Marker>
        )}

        {!selectionMode &&
          jobs.map((job) => (
            <Marker key={job.id} position={[job.latitude, job.longitude]}>
              <Popup>
                <strong>{job.title}</strong>
                <br />
                {job.description}
                <br />
                Location: {job.location}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

MapComponent.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoomLevel: PropTypes.number.isRequired,
  onMapClick: PropTypes.func.isRequired,
  jobs: PropTypes.array,
  selectionMode: PropTypes.bool,
  title: PropTypes.string,
};

export default MapComponent;
