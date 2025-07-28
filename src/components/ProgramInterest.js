import React, { useState } from "react";
const InterestedProgram = () => {
  const [program, setProgram] = useState("");
  const handleChange = (e) => {
    setProgram(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!program) {
      alert("Please select a program.");
      return;
    }
    alert(`Selected program: ${program}`);
  };
  return (
    <form onSubmit={handleSubmit} >
      <label>
        <select
          value={program}
          onChange={handleChange}
        >
          <option value="">-- Choose Program --</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Software engineering">Software engineering</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Website Developer">Website Developer</option>
        </select>
      </label>
    </form>
  );
};

export default InterestedProgram;
