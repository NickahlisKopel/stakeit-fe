import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Post from "./Post";
const Posts = () => {
    
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const getPosts = async () => {
            try{
                const res = await axios.get('http://localhost:8080/api/posts/')

                console.log(res.data);
                setPosts(res.data);

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
            <h1>Posts</h1>
            {(displayPosts())}
        </Container>
    )
}

export default Posts;