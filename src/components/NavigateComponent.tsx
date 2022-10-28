import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const NavigateComponent = () => {
    return (
        <nav>
            <NavLink to={"/login"}>login</NavLink>
            <NavLink to={"/main"}>main</NavLink>
        </nav>
    );
};

export default NavigateComponent;
