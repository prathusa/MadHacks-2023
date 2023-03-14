import React from "react";
import PatientList from "../components/PatientList";

function Doctor()
{
    return (
        <>
            <div className="pt-20">
                <p className="m-left px-10 py-5 text-2xl">Patients</p>
                <PatientList />
            </div>
        </>
    );
}

export default Doctor;