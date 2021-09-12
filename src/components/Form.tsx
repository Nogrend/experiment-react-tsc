import React, {useState} from "react";

export default function Form() {
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: "",
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = event.target;
        
        setFullName((prevValue) => {
            if (name === "firstName") {
                return {
                    firstName: value,
                    lastName: prevValue.lastName
                }
            } else {
                return {
                    firstName: prevValue.firstName,
                    lastName: value
                }
            }
        })
    }

    return (
        <div className="container">
            <h1>
                Hello {fullName.firstName} {fullName.lastName}
            </h1>
            <form>
                <input
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={fullName.firstName}
                />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={fullName.lastName}
                />
            </form>
        </div>
    );
}
