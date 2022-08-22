import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Container from "../common/Container";
import Post from "../Post/Post";
import Comment from "../Post/Comment";
import Button from "../common/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';
const Home = () => {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [auth] = useContext(AuthContext);

    const navigate = useNavigate();
    
    useEffect(() => {
        const getPosts = async () => {
            try{
                const res = await axios.get('http://localhost:8080/api/posts/')

                console.log(res.data);
                setPosts(res.data);
                setComments(res.data.comments)
                

            }catch (error){
                console.error(error.response ? error.response.data : error.message)
            }
        }
        
        getPosts();
        
    }, [])

    const displayPosts = () =>{
        return posts.map(post => {return (<Post post={post}/>)})
    }
    
    return(
        <Container>
            <h1>Home</h1>
            {(displayPosts())}
           
            
        </Container>
    )
}

export default Home;