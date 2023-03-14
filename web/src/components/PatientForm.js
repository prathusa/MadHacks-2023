import React, { useState } from 'react';
import PatientFormSymptom from './PatientFormSymptom';


function PatientForm(props) 
{
    // const [name, setName] = useState('');

    function handleSubmit()
    {
        alert("hi");
    }

    return (
        <>
            <div className="w-[75%] max-h-[1000px] bg-[#ffeeee] mx-auto rounded-lg shadow-lg p-5">
                <p className="text-2xl p-3 text-center">Symptom Form</p>
                <ul className="">
                    <li><PatientFormSymptom name="test"/></li>
                </ul>

                <div className="text-center">
                    <button onClick={handleSubmit} className="bg-[#ffcfcf] hover:bg-[#ffbfbf] rounded-xl p-2 w-[100px] shadow-md my-3">Submit</button>
                </div>
            </div>
        </>
    );
}

export default PatientForm;
