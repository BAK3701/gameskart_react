
import styled from "styled-components"
const Container = styled.div`
    background-color: #fcd4a9;
    padding: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 10px;
    &:hover{
        transform: scale(1.05);
    }
`
const Image = styled.img`

`
const Info = styled.div`

`
const Title = styled.p`
    color: #F57738;
    font-weight: bold;
`

const Gamesitems = ({item}) => {
    return (
        <Container>
            <Image src={item.img} alt="" />
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Title>
                    ₹{item.price}
                </Title>
            </Info>
        </Container>
    )
}

export default Gamesitems
