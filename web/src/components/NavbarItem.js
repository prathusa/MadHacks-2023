import React from 'react';

function NavbarItem(props) 
{
    return <a href={props.link} className="text-white px-3 py-2 text-xl transition ease-in-out hover:bg-[#222266] duration-200 rounded-md">{props.text}</a>;
}

export default NavbarItem;
