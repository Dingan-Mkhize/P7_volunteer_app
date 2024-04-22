import PropTypes from "prop-types";

const colorClasses = {
  gray: "bg-gray-400",
  red: "bg-red-400",
  blue: "bg-blue-400",
  // ... other color mappings
};

const sizeClasses = {
  3: "h-3 w-3 text-xs",
  5: "h-5 w-5 text-2xl",
  10: "h-10 w-10 text-5xl",
  12: "h-12 w-12 text-6xl",
  14: "h-14 w-14 text-7xl",
};

const FallbackProfilePic = ({ name, size, color, padding }) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const colorClass = colorClasses[color] || colorClasses.gray;
  const sizeClass = sizeClasses[size] || sizeClasses[10];
  const paddingClass = padding || "p-9"; // Use 'p-9' as the default padding

  return (
    <div
      className={`flex items-center justify-center mx-3 rounded-full text-white font-bold uppercase border border-black shadow-[#7d7d7d] shadow-md ${colorClass} ${sizeClass} ${paddingClass}`}
      aria-label={`${name}'s profile picture`}
    >
      {firstLetter}
    </div>
  );
};

FallbackProfilePic.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([3, 5, 10, 12, 14]),
  color: PropTypes.oneOf(Object.keys(colorClasses)),
  padding: PropTypes.string, // New prop for custom padding
};

FallbackProfilePic.defaultProps = {
  size: "10",
  color: "gray",
  padding: "p-9", // Default padding
};

export default FallbackProfilePic;
