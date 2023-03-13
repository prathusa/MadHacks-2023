import React from "react";
import PatientList from "../components/PatientList";

function Doctor()
{
    return (
        <>
            <div className="pt-20">
                <p className="m-left px-10 py-5 text-2xl">Patients</p>
                <PatientList />
                {/* <hr className="h-1 mx-auto my-5 w-[80%] bg-gray-100 border-0 rounded" /> */}
                {/*<div className="flex">
                    <PatientInfo name="Person 1"/>
                </div> */}
            </div>
        </>
    );
}

export default Doctor;