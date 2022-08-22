import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
const UpdateForm = (props) => {
   
   const handleChange = (e) => {
    props.updateForm(e.target.name, e.target.value)
   }
   
    return(
        <Container>
            <Form onSubmit={props.onSubmit}>
                <InlineContainer>
                    <Input
                    name="name"
                    id="name"
                    placeholder="Username"
                    value={props.query.name}
                    onChange={handleChange}
                    required>
                    </Input>
                </InlineContainer>
                <InlineContainer>
                    <Input 
                    name="age"
                    id="age"
                    placeholder="Age"
                    value={props.query.age}
                    onChange={handleChange}
                    required>
                    </Input>
                </InlineContainer>
                <InlineContainer>
                    <Input
                    name="jobTitle"
                    id="jobTitle"
                    placeholder="Job Title"
                    value = {props.query.jobTitle}
                    onChange={handleChange}
                    required>
                    </Input>
                </InlineContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default UpdateForm;