import { useState } from "react";
const Degree_level = () => {
  const [Degree_level, setDegree] = useState("");
  const handleChange = (e) => {
    setDegree(e.target.value);
  };
  return (
    <div>
      <label> Degree Level:
        <input
          type="radio" name="Degree_level" value="Undergraduate"
          checked={Degree_level === "Undergraduate"}
          onChange={handleChange}
        />
        Undergraduate
      </label>
      <label>
        <input
          type="radio" name="Degree_level" value="Postgraduate"
          checked={Degree_level === "Postgraduate"}
          onChange={handleChange}
        />
        Postgraduate
      </label>
    </div>
  );
};
export default Degree_level;
