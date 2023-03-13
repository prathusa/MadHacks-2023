import React from "react";
import Navbar from "./Navbar";

function PatientDesc(props)
{
    // const firstName = props.location.firstName
    // const lastName = props.location.lastName
    return (
        <>
            {/* <Navbar /> */}
            <div className="w-[500px] max-w-[90%] h-[500px] bg-[#ffeeee] m-auto rounded-lg shadow-lg p-5 justify-left">
                <p className="text-2xl">Patient</p>
                <p className="">{props.name}</p>
            </div>
        </>
    );
}

export default PatientDesc;