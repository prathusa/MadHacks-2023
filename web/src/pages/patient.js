import React from "react";
import ReactBigCalendar from "../components/ReactBigCalendar";

function Patient()
{
    return (
        <>
            <div className="pt-20">
                <p className="text-2xl px-10">Hello, User!</p>
                <ReactBigCalendar />    
                <hr className="h-1 mx-auto my-10 max-w-[80%] bg-gray-100 border-0 rounded" />
            </div>
        </> 
    );
}

export default Patient;