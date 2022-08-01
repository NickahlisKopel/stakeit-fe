import React from "react";
import {Routes,Route} from 'react-router-dom';
import Container from "../common/Container";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Posts from "../Post/Posts";
import Login from "../Auth/Login";
import Self from "../User/Self";
const AppRouter = () => {
    return(
        <Container>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/profile" element={<Self/>}/>
                
            </Routes>
        </Container>
    )
}

export default AppRouter;