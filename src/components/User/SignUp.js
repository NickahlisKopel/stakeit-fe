import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import SignUpForm from "./SignUpForm";
const SignUp = () =>{
    
    const [query, setQuery] = useState({
        name:"",
        age:"",
        jobTitle:""
    })
    
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]:value
        })
    }
    
    const onSubmit = async () => {
        const data = query;
        const profile = {name:query.name,age:query.age,jobTitle:query.jobTitle}
        try{
            const res = await axios.post("http://localhost:8080/api/users/",profile)
            console.log(res.data);
            navigate("/login")
        } catch (error){
            console.error(error.response ? error.response.data : error.message)
        }
    }


    return(
        <Container>
            <h1>Sign Up</h1>
            <SignUpForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}
export default SignUp;