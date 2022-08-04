import React from "react";
import Container from "../common/Container";
import InLineContainer from "../common/InlineInputContainer";
import Form from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";
const CommentForm = (props) => {
    
    const handleChange = (e) => {
        props.updateForm(e.target.name, e.target.value)
    }

    return(
        <Container>
            <Form onSubmit={props.onSubmit}>
            <InLineContainer>
                    <Input 
                    name="postId"
                    id="postId"
                    placeholder="Post ID"
                    value={props.query.postId}
                    onChange={handleChange}
                    required>
                    </Input>
                </InLineContainer>
                <InLineContainer>
                    <Input 
                    name="body"
                    id="body"
                    placeholder="Comment"
                    value={props.query.body}
                    onChange={handleChange}
                    required>
                    </Input>
                </InLineContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}
export default CommentForm;
