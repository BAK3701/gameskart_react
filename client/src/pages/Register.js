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
    width: 500px;
    padding: 25px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const Title = styled.h2`
    padding-bottom: 10px;
    margin: 10px auto;
    width: fit-content;
    position: relative;
    color: #F57738;
    &::after{
        content: '';
        background: #4a4a4a;
        width: 100px;
        height: 5px;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    margin: 10px 0;
    color: #F57738;
`
const Input = styled.input`
    border: 0.5px solid #fcd4a9;
`
const Button = styled.button`
    margin: 30px auto 10px auto;
    background-color: #4a4a4a;
    border: none;
    color: #F57738;
    padding: 10px;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.05);
    }
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
