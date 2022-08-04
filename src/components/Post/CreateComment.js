import axios from "axios";
import React, { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import { AuthContext } from "../Providers/AuthProvider";
import CommentForm from "./CommentForm";

const CreateComment = () => {

    const [query,setQuery] = useState({
        postId:"",
        body:""
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
        const comment = {body:query.body}
        try{
            const res = await axios.post(`http://localhost:8080/api/comments/${query.postId}/${auth.id}`,comment)
            console.log(res.data);
            navigate("/")
        }catch (error){
        console.error(error.response ? error.response.data : error.message)
    }
    }

    return(
        <Container>
            <h1>Create Comment</h1>
            <CommentForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}

export default CreateComment;