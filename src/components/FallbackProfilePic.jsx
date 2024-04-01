import PropTypes from "prop-types";

const colorClasses = {
  gray: "bg-gray-400",
  red: "bg-red-400",
  blue: "bg-blue-400",
  // ... other color mappings
};

const sizeClasses = {
  10: "h-10 w-10 text-5xl",
  12: "h-12 w-12 text-6xl",
  14: "h-14 w-14 text-7xl",
  // ... other size mappings
};

const FallbackProfilePic = ({ name, size, color }) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const colorClass = colorClasses[color] || colorClasses.gray;
  const sizeClass = sizeClasses[size] || sizeClasses[10];

  return (
    <div
      className={`flex items-center justify-center mx-3 p-9 rounded-full text-white font-bold uppercase ${colorClass} ${sizeClass}`}
      aria-label={`${name}'s profile picture`}
    >
      {firstLetter}
    </div>
  );
};

FallbackProfilePic.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizeClasses)),
  color: PropTypes.oneOf(Object.keys(colorClasses)),
};

FallbackProfilePic.defaultProps = {
  size: "10",
  color: "gray",
};

export default FallbackProfilePic;
