import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InLineContainer from "../common/InlineInputContainer"
import Input from "../common/Input";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
const PostForm = (props) => {
    
    const handleChange = (e) => {
        props.updateForm(e.target.name, e.target.value)
     }

    return(
        <Container>
            <Form onSubmit={props.onSubmit}>
                <InLineContainer>
                    <Input name="title" 
                    id="title" 
                    placeholder="Title" 
                    value={props.query.title} 
                    onChange={handleChange} 
                    required>
                    </Input>
                </InLineContainer>
                <InLineContainer>
                    <Input
                        name="body"
                        id="body"
                        placeholder="Body"
                        value ={props.query.body}
                        onChange={handleChange} 
                        required
                        >
                    </Input>
                </InLineContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default PostForm;
