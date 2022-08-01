import React from "react";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";
import BorderCardAdv from "../common/BorderCardAdv";
const Post = (props) => {
    return(
        <BorderCardAdv>
            <p>{props.post.profile.name}</p>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
        </BorderCardAdv>
            
        
    )
}

export default Post;
