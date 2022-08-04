import React,{useState, useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Container from "../common/Container";
import PostForm from "./PostForm";


const CreatePost = () => {
    
    const [query, setQuery] = useState({
        title: "",
        body: ""
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
        const post = {title:query.title,body:query.body}
    try{
        const res = await axios.post(`http://localhost:8080/api/posts/${auth.id}`,post)
        console.log(res.data);
        navigate("/")
    } catch (error){
        console.error(error.response ? error.response.data : error.message)
    }
    }
    
    return(
        <Container>
            <h1>Create Post</h1>
            <PostForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}

export default CreatePost;