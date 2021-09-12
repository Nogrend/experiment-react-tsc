import React, { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event: any) {
    // added ":any"
    const { value, name } = event.target;

    //     setFullName(prevValue => { // this line gives an error, why?
    //       if (name === "fName") {
    //         return {
    //           fName : value,
    //           lName : prevValue.lName
    //         }
    //       } else if (name === "lName") {
    //         return {
    //           fName : prevValue.fName,
    //           lName : value
    //         }
    //       }
    //     })
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
      </form>
    </div>
  );
}
