import React from "react";
import PatientDesc from "../components/PatientDesc";
import { useLocation } from 'react-router-dom';

function PatientInfo(props)
{
    // const { info } = props.location.state;
    return (
        <>
            <div className="pt-20">
                {/* <PatientDesc name={info}/> */}
                <PatientDesc name="test"/>
                
            </div>
        </>
    );
}

export default PatientInfo;