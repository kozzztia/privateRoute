import React from 'react';
import {Outlet} from "react-router-dom";

const Landing = () => {
    return (
        <div>
            landing
            <Outlet/>
        </div>
    );
};

export default Landing;
