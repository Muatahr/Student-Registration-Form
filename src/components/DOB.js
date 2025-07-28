import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DoB = () => {
    const [dob, setDob] = useState(null);
    return (
        <>
        <label>Date of Birth:</label>
        <div className="container">
            <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="DD-MM-YYYY"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={new Date()}
                minDate={new Date("2000-01-01")}
            />
        </div>

        
        </>
    );
};
export default DoB;