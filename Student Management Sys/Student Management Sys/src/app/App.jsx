import './App.css'
import {Route, Routes, Link, Navigate} from "react-router-dom";

import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Main from "../component/Main/Main.jsx";
import {useEffect, useState} from "react";


function App() {

    const [login , setLogin] = useState(true);


    useEffect(() => {
        const key=localStorage.getItem('stmToken')
        console.log(key)
        if(key != null){
            setLogin(true);
        }
        else {
            setLogin(false)
        }
    }, []);

  return (

    <div>
        {
            login ?
                <Main/>
                :
                <div>
                    {/*//1 st part eka hadala iwarai eka nisa comment karanawaa //*/}
                    <Routes>
                        <Route path={"*"} element={<Navigate to={"/login"}/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/register'} element={<Register/>}/>

                    </Routes>
                </div>
        }

    </div>
  )
}

export default App
