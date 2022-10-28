import React, {FC, useMemo, useState} from 'react';
import './App.css';
import {
    Routes,
    Route, Navigate
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import MainLayout from "./components/MainLayout";
import ItemComponent from "./components/ItemComponent";
import LoginComponent from "./components/LoginComponent";

interface Interface {
    isAuth: boolean,
    children : React.ReactNode,
}


const IsAuthHoc = ({isAuth , children}:Interface)  => {
    if(!isAuth){
        return <Navigate  to={"/login"}/>
    }
    return <Routes>{children}</Routes>
}




function App() {
    const [isAuth , setIsAuth] = useState(false)

    return (
    <div className="App">

     <Routes>
         <Route path={"/"} element={<PageLayout/>}>
            <Route path={"*"} element={<p>404</p>}/>
            <Route path={"login"} element={<LoginComponent setIsAuth={setIsAuth}/>}/>
             <Route path={"main/*"} element={
                 <IsAuthHoc isAuth={isAuth}>
                     <Route index element={<MainLayout/>}/>
                     <Route path={":id"} element={<ItemComponent/>}/>
                 </IsAuthHoc>

             }/>



         </Route>

     </Routes>
    </div>
  );
}

export default App;
