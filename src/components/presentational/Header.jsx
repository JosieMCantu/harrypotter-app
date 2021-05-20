import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <>
        <NavLink className='active' to={'/home'}>HOME</NavLink>
        <NavLink className='active' to={'/witches'}>WITCHES</NavLink>
        </>
    )
}

export default Header;
