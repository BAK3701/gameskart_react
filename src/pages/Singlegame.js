import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styled from "styled-components"
import Header from '../components/Header'
import Footer from "../components/Footer"

const Container = styled.div`

`
const InfoContainer = styled.div`
    display: flex;
    height: 100vh;
`
const ImageContainer = styled.div`
    display: flex;
    background-color: #fcd4a9;
    flex: 1;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    padding: 0 25px;
`
const Image = styled.img`

`
const Title = styled.h1`
    color: #F57738;
`
const Info = styled.p`
    color: #4a4a4a;
`
const Price = styled.p`
    font-size: 35px;
    color: #F57738;
`
const Select = styled.select`
    padding: 5px;
    border: none;
    color: #F57738;
    background-color: #fcd4a9;
    width: fit-content;
`
const Option = styled.option`

`
const CartDiv = styled.div`

`
const Number = styled.div`
    //background-color: lightblue;
    display: flex;
    align-items: center;
`
const Amount = styled.span`
    color: #4a4a4a;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`
const AddSub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #fcd4a9;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.05);
    }

`
const AddCart = styled.button`
    background-color: #4a4a4a;
    color: #F57738;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-size: large;
    font-weight: bold;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.05);
    }
`

const Singlegame = () => {
    return (
        <Container>
            <Header />
            <InfoContainer>
                <ImageContainer>
                    <Image src="images/rdr2.png" alt=""/>
                </ImageContainer>
                <DetailsContainer>
                    <Title>Red Dead Redemption 2</Title>
                    <Price>₹1000</Price>
                    <Info>
                        Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang's decline as they are pursued by lawmen, fellow gangs and Pinkerton agents
                    </Info>
                    <Select defaultValue = {'DEFAULT'}>
                        <Option disabled value="DEFAULT">Platform</Option>
                        <Option>PC</Option>
                        <Option>XBox</Option>
                        <Option>PS</Option>
                    </Select>
                    <Number>
                        <AddSub>
                            <AddRoundedIcon style={{fill: '#F57738'}}/>
                        </AddSub>
                        <Amount>1</Amount>
                        <AddSub>
                            <RemoveRoundedIcon style={{fill: '#F57738'}}/>
                        </AddSub>
                    </Number>
                    <CartDiv>
                        <AddCart>Add To Cart</AddCart>
                    </CartDiv>
                </DetailsContainer>
            </InfoContainer>
            <Footer />
        </Container>
    )
}

export default Singlegame
