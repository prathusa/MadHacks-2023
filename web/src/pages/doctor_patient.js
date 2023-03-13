import React from "react";
import PatientDesc from "../components/PatientDesc";
import { useLocation } from 'react-router-dom';
import ReactBigCalendar from "../components/ReactBigCalendar";

var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

function PatientInfo(props)
{
    // console.log();
    const ssn = getParams(document.location.href).ssn;
    return (
        <>
            {/* <p className="text-2xl px-10">Hello, User!</p> */}
            <div className="pt-20 flex px-5 flex-wrap">
                <ReactBigCalendar
                    ssn={parseInt(ssn)}
                />
                <PatientDesc />
                {/* <PatientDesc name="test"/> */}
            </div>
        </>
    );
}

export default PatientInfo;