import React from "react";

function PatientFormSymptomRadioItem(props)
{
    return (
        <>
            <div>
                <input type="radio" name="option" id={props.value} value={props.value} class="peer hidden" required/>
                <label for={props.value} class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#fbcfcf] peer-checked:font-bold">
                    {props.value}
                </label>
            </div>
        </>
    );
}

export default PatientFormSymptomRadioItem;