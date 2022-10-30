import React,{useState} from 'react';
import './App.css';
import {
    Routes,
    Link,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";
import Landing from "./components/Landing";
import LoginComponent from "./components/LoginComponent";


interface Interface {
    isAuth: boolean,
    children?: React.ReactNode,
}


const IsAuthHoc = ({isAuth , children}:Interface)  => {
    if(!isAuth){
        return <Navigate  to={"/login"}/>
    }
    return <Outlet/>
}




function App() {
    const [isAuth , setIsAuth] = useState(false)

    return (
    <div className="App">
        <nav>
            <Link to={"home"}>home</Link>
            <Link to={"dashboard"}>dashboard</Link>
        </nav>

     <Routes>
         <Route index element={<Landing/>}/>
         <Route path={"lending"} element={<Landing/>}/>
         <Route element={<IsAuthHoc isAuth={isAuth}/>}>
             <Route path={"home"} element={<p>home</p>}/>
             <Route path={"dashboard"} element={<p>dashboard</p>}/>
         </Route>
         <Route path={"login"} element={<LoginComponent setIsAuth={setIsAuth} isAuth={isAuth}/>}/>
         <Route path={"*"} element={<p>404</p>}/>
     </Routes>
    </div>
  );
}

export default App;
