import React, { useState } from "react";

// export interface ISignUpData {
//   fName: string;
//   lName: string;
// }

export default function Name() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });
  //   const [fullName, setFullName] = useState<ISignUpData | undefined>(undefined);
  function handleChange(event: any) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}
