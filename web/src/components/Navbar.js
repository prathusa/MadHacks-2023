import React from 'react';
import NavbarItem from "./NavbarItem"

function Navbar() 
{
    return (
        <>
            <nav className="z-[1000] fixed w-full bg-[#ee9999] shadow-lg">
                <div className="container mx-auto px-4 py-2 flex flex-row items-center justify-between">
                    <div className="text-white font-medium text-2xl px-2 py-2">Health Log</div>
                    
                    <div className="space-x-[2px]">
                        <NavbarItem text="Home" link="/"/>
                        <NavbarItem text="Doctor" link="/doctor"/>
                        <NavbarItem text="Patient" link="/patient"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
