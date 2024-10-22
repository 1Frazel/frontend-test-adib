import { useState } from "react";
import "./styles.css";

export default function ListingAd({
  pic,
  building_icon,
  title,
  psf_min,
  psf_max,
  address,
  subprice_label,
  availabilities_label,
  project_type,
  year,
  ownership_type,
  description,
}) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [revealedNumbers, setRevealedNumbers] = useState({});

  // Toggle the visibility of the description
  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  // Function to anonymize phone numbers (replaces last 4 digits with 'xxxx')
  const anonymizePhoneNumber = (phoneNumber) => {
    // Replace the space if it exists between the digits
    if (phoneNumber.includes(" ")) {
      return phoneNumber.slice(0, 5) + "xxxx"; // Keep the space after 4 digits
    }
    return phoneNumber.slice(0, 4) + " xxxx"; // Anonymize without space
  };

  // Function to toggle phone number visibility
  const togglePhoneNumber = (phoneNumber) => {
    setRevealedNumbers((prevState) => ({
      ...prevState,
      [phoneNumber]: !prevState[phoneNumber],
    }));
  };

  // Function to render the description with anonymized phone numbers
  const renderDescription = (text) => {
    // Updated regex to match numbers with or without spaces
    const phoneRegex = /8\d{3} ?\d{4}/g; // Matches both 82345678 and 8234 5678
    const parts = text.split(phoneRegex);
    const matches = text.match(phoneRegex);

    if (!matches) return text;

    return parts.reduce((acc, part, i) => {
      const phoneNumber = matches[i];
      const isRevealed = revealedNumbers[phoneNumber];

      // If it's the last part, just return it without a phone number
      if (!phoneNumber) return [...acc, part];

      return [
        ...acc,
        part,
        <span
          key={i}
          className="phone-number"
          onClick={() => togglePhoneNumber(phoneNumber)}
        >
          {isRevealed ? phoneNumber : anonymizePhoneNumber(phoneNumber)}
        </span>,
      ];
    }, []);
  };

  return (
    <div className="App">
      <img className="mainPic" width="300" height="500" src={pic} alt="Main" />
      <div className="mainContent">
        <div className="header">
          {/* Left part: building icon, title, and address */}
          <div className="header-left">
            <img className="buildingIcon" src={building_icon} alt="Building Icon" />
            <div>
              <h1 className="title">{title}</h1>
              <p className="subdetails">{address}</p>
            </div>
          </div>

          {/* Right part: psf and subprice_label */}
          <div>
            <h2 className="psf">${psf_min} - ${psf_max} psf</h2>
            <p className="subprice_label">{subprice_label}</p>
          </div>
        </div>

        {/* Brief description (below the header) */}
        <div>
          <h3 className="brief_desc">
            {project_type} · {year} · {ownership_type}
          </h3>
          <h3 className="brief_desc">{availabilities_label}</h3>
        </div>

        {/* See description button container */}
        <div className="button-container">
          <button onClick={toggleDescriptionVisibility}>
            {isDescriptionVisible ? "Hide description" : "See description"}
          </button>
        </div>

        {/* Description Section */}
        <div className={`description-container ${isDescriptionVisible ? "show" : ""}`}>
          <p className="description-text">
            {renderDescription(description)}
          </p>
        </div>
      </div>
    </div>
  );
}
