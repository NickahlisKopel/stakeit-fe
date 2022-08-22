import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Button from "../common/Button";
import Container from "../common/Container";
import { AuthContext } from "../Providers/AuthProvider";
const Self = () => {

    const [auth] = useContext(AuthContext);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getUser = async () => {
            try{
                const res = await axios.get(`http://localhost:8080/api/users/${auth.id}`)
                console.log(res.data);
                setProfile(res.data);
            }catch(error){
                console.error(error.response ? error.response.data : error.message)
            }
        }
        getUser();
    },[])
    

    const deleteUser= async () => {
        try{
            const res = await axios.delete(`http://localhost:8080/api/users/${auth.id}`)
            console.log(res.data);
            navigate("/")
            window.location.reload(false);
        } catch (error){
            console.error(error.response ? error.response.data : error.message)
        }
    }

    const logout = async () => {
        navigate("/")
        window.location.reload(false);
    }

    const update = async () => {
        navigate("/update")

    }
     

    return(
        <Container>
            <h1>{auth.name}</h1>
            <p>Age: {profile.age}</p>
            <p>Job Title: {profile.jobTitle}</p>
            <p>Karma: {profile.karma}</p>
            <Button onClick={logout}>Logout</Button>
            <Button onClick={update}>Update Profile</Button>
            <Button onClick={deleteUser} style={{color:"red"}}>Delete Profile</Button>
        </Container>
        
    )
}
export default Self;