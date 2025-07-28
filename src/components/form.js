import Gender from "./Gender";
import Degree_level from "./Degree_level";
import DoB from "./DOB";
import PhoneNumber from "./PhoneNumber";
import Region from "./Region";
import InterestedProgram from "./ProgramInterest";
import RegionAndCity from "./RegionAndCity";
const Form = () => {
    return(
            <form className="Student_form ">
                <div className="StudentName ">
                    Student Name
                    <input type="text" placeholder="First Name" maxLength="50"/>
                    <input type="text" placeholder="Last Name" maxLength="50"/>
                </div>
                <div className="DoB">
                    <DoB/>
                </div>
                <div className="Gender">
                    <Gender/>
                </div>
                <div className="Address ">
                    Address
                    <input type="text" placeholder="Address" maxLength="200"/>
                    <div className="City_Region ">
                       <RegionAndCity/>
                    </div>
                </div>
                <div className="Contact_info">
                     E-mail
                    <input type="text" placeholder="student@gmail.com"maxLength="100"/>
                        <div className="">
                            Phone Number
                            <PhoneNumber/>
                        </div>
                </div>
                <div className="Program  ">
                     Program of Interest
                    <InterestedProgram/>
                </div>
                <div className="Degree_level ">
                    <Degree_level/>
                </div>
                <button className="_for_button">SUBMIT</button>
            </form>
        
    );
}
export default Form;