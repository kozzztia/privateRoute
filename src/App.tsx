import React, {FC, useState} from 'react';
import './App.css';
import {
    Routes,
    Route, Navigate
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import MainLayout from "./components/MainLayout";
import ItemComponent from "./components/ItemComponent";


interface Interface {
    isAuth: boolean,
    children : React.ReactNode | React.ReactNode[],
}


const IsAuthHok = ({isAuth , children}:Interface) : any => {
    if(!isAuth){
        return <><Navigate  to={"/login"}/></>
    }
    return children
}




function App() {
    const [isAuth , setIsAuth] = useState(false)

    return (
    <div className="App">

     <Routes>
         <Route path={"/"} element={<PageLayout/>}>
            <Route path={"*"} element={<p>404</p>}/>
            <Route path={"login"} element={<p>login</p>}/>
             <Route path={"main"} element={
                 <IsAuthHok isAuth={isAuth}>
                     <Route index element={<MainLayout/>}/>
                     <Route path={"/main/:id"} element={<ItemComponent/>}/>
                 </IsAuthHok>

             }/>



         </Route>

     </Routes>
    </div>
  );
}

export default App;
