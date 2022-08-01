import React from "react";
import BorderCardAdv from "../common/BorderCardAdv";

const Comment = (props) => {
    return(
        <BorderCardAdv>
            <p>{props.comment.profile.name}</p>
            
        </BorderCardAdv>
    )
}

export default Comment;