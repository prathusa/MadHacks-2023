import React from 'react';

function NavbarItem(props) 
{
    return <a href={props.link} className="text-white px-3 py-3 text-xl transition ease-in-out hover:bg-[#dd7777] duration-200 rounded-lg">{props.text}</a>;
}

export default NavbarItem;
