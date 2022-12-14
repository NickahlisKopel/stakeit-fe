import React from "react";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";
import BorderCardAdv from "../common/BorderCardAdv";
import HorizontalLine from "../common/HorizontalLine";
const Post = (props) => {
    return(
        <Container>
            <HorizontalLine></HorizontalLine>
            <p>Post ID: {props.post.id}</p>
            <p>Profile: {props.post.profile.name}</p>
            <p>Karma: {props.post.profile.karma}</p>
            <h4>{props.post.title}</h4>
            <p>{props.post.body}</p>
            <HorizontalLine></HorizontalLine>
        </Container>
        
            
        
    )
}

export default Post;
