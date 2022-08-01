import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InLineContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";


const LoginForm = (props) => {

    const handleChange = (e) => {
       props.updateForm(e.target.id, e.target.value)
    }

    return(
        <Container>
            <Form onSubmit={props.onSubmit}>
                <InLineContainer>
                    <Input name="id" 
                    id="id" 
                    placeholder="User Id" 
                    value={props.query.id} 
                    onChange={handleChange} 
                    required>
                    </Input>
                </InLineContainer>
                <InLineContainer>
                    <Input
                        name="password"
                        id="password"
                        placeholder="Password"
                        value ={props.query.password}
                        onChange={handleChange} 
                        required
                        type="password"
                        >
                    </Input>
                </InLineContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default LoginForm;