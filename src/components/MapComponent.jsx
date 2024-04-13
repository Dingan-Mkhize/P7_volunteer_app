import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import handIcon from "../assets/hand.png"; // Make sure the path is correct

// Correct imports for the marker icons and shadow
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Define a function to get a custom icon
const getCustomIcon = () => {
  return L.icon({
    iconUrl: handIcon,
    iconRetinaUrl: handIcon,
    iconSize: [35, 45], // Customize as needed
    iconAnchor: [17, 45], // Adjust based on your icon's design
    popupAnchor: [1, -34], // Adjust for best popup placement
    shadowUrl: markerShadow,
    shadowSize: [50, 64],
    shadowAnchor: [13, 62],
  });
};

// Update the default marker icon configuration
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ position, zoomLevel, jobs, title }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("position:", position);
    console.log("mapRef.current:", mapRef.current);

    if (
      mapRef.current &&
      position &&
      Array.isArray(position) &&
      position.length === 2
    ) {
      console.log("Updating map view");
      mapRef.current.setView(position, zoomLevel);
    } else {
      console.log("Map view not updated");
    }
  }, [position, zoomLevel]);

  if (!position || !Array.isArray(position) || position.length !== 2) {
    console.log("Invalid location data");
    return <div>Map cannot be displayed due to invalid location data.</div>;
  }

  console.log("Rendering map component");

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
            <Marker
              key={job.id}
              position={[job.latitude, job.longitude]}
              icon={getCustomIcon()} // Now using the custom hand icon
            >
              <Popup>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                  <p
                    className="text-sm font-semibold my-1"
                    style={{
                      color:
                        job.taskType === "one-time" ? "#15bec1" : "#f17d2b",
                    }}
                  >
                    Job Type: {job.taskType}
                  </p>
                  <p>Location: {job.location}</p>
                  {/* Additional job details */}
                </div>
              </Popup>
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
