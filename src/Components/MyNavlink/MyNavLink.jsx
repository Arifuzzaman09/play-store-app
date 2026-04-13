import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `${isActive ? "text-purple-500 border-purple-500 border-b-2 " : ""}`}>
               {children}
        </NavLink>
    );
};

export default MyNavLink;