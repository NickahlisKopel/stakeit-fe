import React, {useContext} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Button from "../common/Button";
import Container from "../common/Container";
import { AuthContext } from "../Providers/AuthProvider";
const Self = () => {

    const [auth] = useContext(AuthContext);
    const navigate = useNavigate();
    
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
    

    return(
        <Container>
            <h1>{auth.name}</h1>
            <Button onClick={logout}>Logout</Button>
        </Container>
        
    )
}
export default Self;