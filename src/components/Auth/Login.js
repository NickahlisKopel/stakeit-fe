import React, {useState, useContext} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Container from "../common/Container";
import LoginForm from "./LoginForm";
import Button from "../common/Button";

import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
    const [query, setQuery] = useState({
        username: "",
        password: "",
    })

    const [auth, setAuth] = useContext(AuthContext)


    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]:value})
    }

    const onSubmit = async () => {
        const data = query;

    try{
        const res = await axios.get(`http://localhost:8080/api/users/username/${query.username}`)
        console.log(res.data);
        setAuth({id:res.data.id, name: res.data.name})
        navigate("/")
    } catch (error){
        console.error(error.response ? error.response.data : error.message)
    }
    }

    const moveToSignUp = async () => {
        navigate("/signUp")
    }


    return(
        <Container>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} query={query} updateForm={updateForm}></LoginForm>
            <Button onClick={moveToSignUp}>Sign Up</Button>
        </Container>    
    )
}

export default Login;