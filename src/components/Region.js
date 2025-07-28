import React, { useState } from "react";
const Region = () => {
  const [region, setRegion] = useState("");
  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <form onSubmit={handleSubmit} >
      <label>
        <select
          value={region}
          onChange={handleChange}
        >
          <option value="">-- Choose Region --</option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh">Sindh</option>
          <option value="KPK">KPK</option>
          <option value="Balochistan">Balochistan</option>
          <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
          <option value="Islamabad">Islamabad</option>
        </select>
      </label>
    </form>
  );
}
export default Region;