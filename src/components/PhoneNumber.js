import { useState } from "react";
const PhoneNumber = () => {
    const [phone, setPhone] = useState("");
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const onlyNums = value.replace(/\D/g, "");
        if (onlyNums.length <= 11) {
            setPhone(onlyNums);
        }
    };
    return(
        <>
            <input
                type="tel"
                name="phone"
                placeholder="03XXXXXXXXX"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={11}
                pattern="03[0-9]{9}"
            />
        </>
    );
}
export default PhoneNumber;