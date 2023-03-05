import React from "react";

function PatientDesc(props)
{
    return (
        <>
            <div className="w-[250px] h-[500px] bg-[#ffeeee] p-5">
                <p className="">{props.name}</p>
                
            </div>
        </>
    );
}

export default PatientDesc;