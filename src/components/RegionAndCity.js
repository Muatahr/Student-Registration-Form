import React, { useState } from "react";

const RegionAndCity = () => {
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  // Define region-to-cities mapping
  const regionCityMap = {
    Punjab: ["Lahore", "Multan", "Rawalpindi"],
    Sindh: ["Karachi", "Hyderabad", "Sukkur"],
    KPK: ["Peshawar", "Mardan", "Abbottabad"],
    Balochistan: ["Quetta", "Gwadar", "Turbat"],
    "Gilgit-Baltistan": ["Gilgit", "Skardu"],
    Islamabad: ["Islamabad"]
  };

  // Get cities based on selected region
  const getCitiesForRegion = (selectedRegion) => {
    return regionCityMap[selectedRegion] || [];
  };

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    setCity(""); // reset city when region changes
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const cities = getCitiesForRegion(region);

  return (
    <div>
      <h3>Select Region and City</h3>

      <label>Region:</label>
      <select value={region} onChange={handleRegionChange}>
        <option value="">-- Select Region --</option>
        {Object.keys(regionCityMap).map((reg) => (
          <option key={reg} value={reg}>
            {reg}
          </option>
        ))}
      </select>

      {region && (
        <>
          <br />
          <label>City:</label>
          <select value={city} onChange={handleCityChange}>
            <option value="">-- Select City --</option>
            {cities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default RegionAndCity;
