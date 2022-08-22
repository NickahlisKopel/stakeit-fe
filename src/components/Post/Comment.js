import React from "react";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";
import BorderCardAdv from "../common/BorderCardAdv";
import HorizontalLine from "../common/HorizontalLine";
const Comment = (props) => {
    return(
        <Container>
            <HorizontalLine></HorizontalLine>
            <p>Profile: {props.comment.profile.name}</p>
            <p>Karma: {props.comment.profile.karma}</p>
            <p>{props.comment.body}</p>
            <HorizontalLine></HorizontalLine>
        </Container>
        
            
        
    )
}

export default Comment;
