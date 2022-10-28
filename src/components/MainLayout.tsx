import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            Main List
            <Link to={"/main/1"}>1</Link>
            <Link to={"/main/2"}>2</Link>
            <Link to={"/main/3"}>3</Link>
            <Link to={"/main/4"}>4</Link>
            <Link to={"/main/5"}>5</Link>
            <br/>

            <Outlet/>
        </div>
    );
};

export default MainLayout;
