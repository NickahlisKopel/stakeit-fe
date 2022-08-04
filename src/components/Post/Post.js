import React from "react";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";
import BorderCardAdv from "../common/BorderCardAdv";
const Post = (props) => {
    return(
        <BorderCardAdv>
            <p>{props.post.profile.name}</p>
            <p>{props.post.profile.karma}</p>
            <h4>{props.post.title}</h4>
            <p>{props.post.body}</p>

        </BorderCardAdv>
            
        
    )
}

export default Post;
