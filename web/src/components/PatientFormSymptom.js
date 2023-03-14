import React from "react";
import PatientFormSymptomRadioItem from "./PatientFormSymptomRadio";

function PatientFormSymptom(props)
{
    return (
        <>
            <p className="bg-[#ffdcdc] rounded-xl max-w-[25rem] py-3 mx-auto text-center my-3 shadow-md">{props.name}</p>
            <div className="grid w-[50rem] grid-cols-5 space-x-2 rounded-xl bg-[#ffdcdc] shadow-md p-2 mx-auto">
                <PatientFormSymptomRadioItem value="1"/>
                <PatientFormSymptomRadioItem value="2"/>
                <PatientFormSymptomRadioItem value="3"/>
                <PatientFormSymptomRadioItem value="4"/>
                <PatientFormSymptomRadioItem value="5"/>
            </div>
        </>
    );
}

export default PatientFormSymptom;