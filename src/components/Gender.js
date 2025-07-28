import { useState } from "react";
const Gender = () => {
  const [gender, setGender] = useState("");
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <label>Gender:     
        <input
          type="radio" name="gender" value="Male"
          checked={gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input 
          type="radio" name="gender" value="Female"
          checked={gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>
    </div>
  );
};
export default Gender;
