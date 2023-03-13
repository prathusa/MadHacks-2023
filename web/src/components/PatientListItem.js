import React from "react";
import d from "../images/default.png";
import { Link } from 'react-router-dom';

function PatientListItem(props)
{
    console.log(props)
    return (
        <>
            {/* <Link to={{
                pathname: '/doctor_patient',
                // search: '?info=' + props.name,
                state: { firstName: props.firstName, 
                         lastName: props.lastName }
            }} className="w-[200px] h-[100px] bg-[#ffdddd] flex rounded-lg mt-5 mx-2.5 active:bg-[#eecccc]">
                <a href='/doctor_patient' className="w-[200px] h-[100px] bg-[#ffdddd] flex rounded-lg mt-5 mx-2.5 active:bg-[#eecccc]">
                    <img src={props.src ? props.src : d} alt={"image of " + props.name} className="m-3"></img>
                    <p className="m-auto">{props.name}</p>
                    <p className="m-auto">{props.firstName + " " + props.lastName}</p>
                </a> 
            </Link> */}
            <a href={'/MadHacks-2023/doctor_patient?ssn='+props.ssn} className="w-[250px] h-[100px] bg-[#ffdddd] flex rounded-lg mt-5 mx-2.5 active:bg-[#eecccc] shadow-lg">
                <img src={props.src ? props.src : d} alt={"image of " + props.name} className="m-3"></img>
                {/* <p className="m-auto mx-2">{props.name}</p> */}
                <p className="m-auto mx-2">{props.firstName + " " + props.lastName}</p>
            </a>
        </>
    );
}

export default PatientListItem;