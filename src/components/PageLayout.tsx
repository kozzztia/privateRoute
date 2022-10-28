import React from 'react';
import {Outlet} from "react-router-dom";
import NavigateComponent from "./NavigateComponent";

const PageLayout = () => {
    return (
        <div>
            <NavigateComponent/>
            <p>hello</p>
            <Outlet/>
        </div>
    );
};

export default PageLayout;
