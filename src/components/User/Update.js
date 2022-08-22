import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import SignUpForm from "./SignUpForm";
import { AuthContext } from "../Providers/AuthProvider";
const Update = () =>{
    
    const [query, setQuery] = useState({
        name:"",
        age:"",
        jobTitle:""
    })

    const [auth, setAuth] = useContext(AuthContext)
    
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]:value
        })
    }
    
    const onSubmit = async () => {
        const data = query;
        const profile = {id:auth.id,name:query.name,age:query.age,jobTitle:query.jobTitle}
        try{
            const res = await axios.put("http://localhost:8080/api/users/",profile)
            console.log(res.data);
            navigate("/login")
            window.location.reload(false);
        } catch (error){
            console.error(error.response ? error.response.data : error.message)
        }
    }


    return(
        <Container>
            <h1>Update Profile</h1>
            <SignUpForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}
export default Update;