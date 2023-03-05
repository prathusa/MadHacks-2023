import React from "react";
import PatientDesc from "../components/PatientDesc";
import { useLocation } from 'react-router-dom';
import ReactBigCalendar from "../components/ReactBigCalendar";

function PatientInfo(props)
{
    // const { info } = props.location.state;
    return (
        <>
            <div className="pt-20 flex px-5 flex-wrap">
                <ReactBigCalendar />
                <PatientDesc />
                {/* <PatientDesc name="test"/> */}
            </div>
        </>
    );
}

export default PatientInfo;