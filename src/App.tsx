import React from 'react';
import './App.css';
import {
    Routes,
    Route
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import MainLayout from "./components/MainLayout";
import ItemComponent from "./components/ItemComponent";

function App() {
  return (
    <div className="App">

     <Routes>
         <Route path={"/"} element={<PageLayout/>}>
            <Route path={"*"} element={<p>404</p>}/>
            <Route path={"login"} element={<p>login</p>}/>
             <Route path={"main"} element={<MainLayout/>}/>
             <Route path={"/main/:id"} element={<ItemComponent/>}/>
         </Route>

     </Routes>
    </div>
  );
}

export default App;
