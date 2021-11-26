import styled from "styled-components"
import bgimage from "../components/images/bgimage.png"
const Container = styled.div`
    height: 100vh;
    background-image: url(${bgimage});
    display: flex;
    align-items: center;
    justify-content: center;
`
const FormContainer = styled.div`
    width: 60%;
    padding: 25px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const Title = styled.h2`
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`

`
const Input = styled.input`

`
const Button = styled.button`

`



const Register = () => {
    return (
        <Container>
            <FormContainer>
                <Title>Create Your Account</Title>
                <Form>
                    <Label>First Name</Label>
                    <Input type="text" placeholder="First Name" />
                    <Label>Last Name</Label>
                    <Input type="text" placeholder="Last Name" />
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email" />
                    <Label>Create Password</Label>
                    <Input type="password" />
                    <Label>Confirm Password</Label>
                    <Input type="password" />
                    <Button>Register Here</Button>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default Register
