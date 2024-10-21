import "./styles.css";

export default function ListingAd({ pic, building_icon, title, psf_min, psf_max, address, subprice_label, availabilities_label, project_type, year, ownership_type, description }) {
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
          <h3 className="brief_desc">{project_type} · {year} · {ownership_type}</h3>
          <h3 className="brief_desc">{availabilities_label}</h3>
        </div>

        {/* See description button */}
        <button>See description</button>
      </div>
    </div>
  );
}
