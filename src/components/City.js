import { useState } from "react";
const City = () => {
  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} >    
        <label>
          <select
            value={city}
            onChange={handleChange}
          >
            <option value="">-- Choose city --</option>
            <option value="Lahore">Lahore</option>
            <option value="Gujranwala">Gujranwala</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </label>
    </form>
  );
};

export default City;
