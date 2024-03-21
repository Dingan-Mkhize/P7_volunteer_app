import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Correct imports for the marker icons and shadow
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Delete the old icon URLs and assign the new ones
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ position, zoomLevel, jobs, title }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (
      mapRef.current &&
      position &&
      Array.isArray(position) &&
      position.length === 2
    ) {
      mapRef.current.setView(position, zoomLevel);
    }
  }, [position, zoomLevel]);

  if (!position || !Array.isArray(position) || position.length !== 2) {
    return <div>Map cannot be displayed due to invalid location data.</div>;
  }

  return (
    <div className="w-full" style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={zoomLevel}
        maxZoom={18}
        minZoom={10}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <Marker key={job.id} position={[job.latitude, job.longitude]}>
              <Popup>{job.title}</Popup>
            </Marker>
          ))
        ) : (
          <Marker position={position}>
            <Popup>{title}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

MapComponent.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoomLevel: PropTypes.number.isRequired,
  jobs: PropTypes.array,
  title: PropTypes.string,
};

export default MapComponent;
