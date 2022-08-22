import React from "react";
import {Routes,Route} from 'react-router-dom';
import Container from "../common/Container";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Login from "../Auth/Login";
import Self from "../User/Self";
import CreatePost from "../Post/CreatePost";
import SignUp from "../User/SignUp";
import CreateComment from "../Post/CreateComment";
import Update from "../User/Update";

const AppRouter = () => {
    return(
        <Container>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Self/>}/>
                <Route path="/createPost" element={<CreatePost/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/createComment" element={<CreateComment/>}/>
                <Route path="/update" element={<Update/>}/>
            </Routes>
        </Container>
    )
}

export default AppRouter;