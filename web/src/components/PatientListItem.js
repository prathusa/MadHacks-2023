import React from "react";
import d from "../images/default.png";
import { Link } from 'react-router-dom';

function PatientListItem(props)
{
    return (
        <>
            {/* <Link to={{
                pathname: '/doctor_patient',
                search: '?info=' + props.name,
                state: { info: props.name }
            }} className="w-[200px] h-[100px] bg-[#ffdddd] flex rounded-lg mt-5 mx-2.5 active:bg-[#eecccc]">
                <a href='/doctor_patient' className="w-[200px] h-[100px] bg-[#ffdddd] flex rounded-lg mt-5 mx-2.5 active:bg-[#eecccc]">
                    <img src={props.src ? props.src : d} alt={"image of " + props.name} className="m-3"></img>
                    <p className="m-auto">{props.name}</p>
                </a>
            </Link> */}
            <a href='/doctor_patient' className="w-[200px] h-[100px] bg-[#ffdddd] flex rounded-lg mt-5 mx-2.5 active:bg-[#eecccc]">
                <img src={props.src ? props.src : d} alt={"image of " + props.name} className="m-3"></img>
                <p className="m-auto">{props.name}</p>
            </a>
        </>
    );
}

export default PatientListItem;