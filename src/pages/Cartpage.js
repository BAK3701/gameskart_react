import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useState } from 'react';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h2`
    padding-bottom: 10px;
    margin: 10px auto;
    width: fit-content;
    position: relative;
    color: #f57738;
    &::after {
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
`;
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
`;
const Button = styled.button`
    background-color: #4a4a4a;
    border: none;
    color: #f57738;
    padding: 10px;
    font-weight: bold;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;
const Items = styled.div`
    display: flex;
    min-height: 100vh;
    ${mobile({ flexDirection: 'column' })}
`;
const Gamedetails = styled.div`
    flex: 2;
    background-color: #fcd4a9;
    display: flex;
    flex-direction: column;
`;
const Order = styled.div`
    flex: 1;
`;
const Orderdet = styled.div`
    position: sticky;
    top: ${(props) => props.top};
    transition: all 0.5s ease;
    margin: 0 20px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    ${mobile({ margin: '20px' })}
`;
const Gameitem = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-around;
    ${mobile({ flexDirection: 'column', alignItems: 'center' })}
`;
const Image = styled.img``;
const GameCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
`;
const Gametitle = styled.h2`
    color: #f57738;
    text-align: center;
`;
const Price = styled.p`
    color: #f57738;
    font-weight: bold;
    font-size: 30px;
`;
const Platform = styled.p`
    color: #f57738;
`;
const Number = styled.div`
    //background-color: lightblue;
    display: flex;
    align-items: center;
`;
const Amount = styled.span`
    color: #4a4a4a;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`;
const AddSub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #4a4a4a;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
const Totaldiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;
const Totaltext = styled.span`
    color: ${(props) => props.total === 'a' && '#F57738'};
    font-size: ${(props) => props.total === 'a' && '30px'};
`;
const Totalprice = styled.span`
    color: ${(props) => props.total === 'a' && '#F57738'};
    font-size: ${(props) => props.total === 'a' && '30px'};
    font-weight: ${(props) => props.total === 'a' && 'bold'};
`;

const Cartpage = () => {
    const [orderScroll, setOrderScroll] = useState(false);
    var prevScroll = window.scrollY;
    const scrollfunc = () => {
        if (window.scrollY < prevScroll) {
            setOrderScroll(false);
        } else {
            setOrderScroll(true);
        }
        prevScroll = window.scrollY;
    };
    window.addEventListener('scroll', scrollfunc);
    return (
        <Container>
            <Header item="sc" />
            <Wrapper>
                <Title>Shopping Cart</Title>
                <Buttons>
                    <Button>Back to Games</Button>
                    <Button>Check Out</Button>
                </Buttons>
                <Items>
                    <Gamedetails>
                        <Gameitem>
                            <Image src="images/rdr2.png" alt="" />
                            <GameCart>
                                <Gametitle>Red Dead Redemption 2</Gametitle>
                                <Price>₹1000</Price>
                                <Platform>PC</Platform>
                                <Number>
                                    <AddSub>
                                        <AddRoundedIcon
                                            style={{ fill: '#F57738' }}
                                        />
                                    </AddSub>
                                    <Amount>1</Amount>
                                    <AddSub>
                                        <RemoveRoundedIcon
                                            style={{ fill: '#F57738' }}
                                        />
                                    </AddSub>
                                </Number>
                            </GameCart>
                        </Gameitem>
                        <Gameitem>
                            <Image src="images/rdr2.png" alt="" />
                            <GameCart>
                                <Gametitle>Red Dead Redemption 2</Gametitle>
                                <Price>₹1000</Price>
                                <Platform>PC</Platform>
                                <Number>
                                    <AddSub>
                                        <AddRoundedIcon
                                            style={{ fill: '#F57738' }}
                                        />
                                    </AddSub>
                                    <Amount>1</Amount>
                                    <AddSub>
                                        <RemoveRoundedIcon
                                            style={{ fill: '#F57738' }}
                                        />
                                    </AddSub>
                                </Number>
                            </GameCart>
                        </Gameitem>
                        <Gameitem>
                            <Image src="images/rdr2.png" alt="" />
                            <GameCart>
                                <Gametitle>Red Dead Redemption 2</Gametitle>
                                <Price>₹1000</Price>
                                <Platform>PC</Platform>
                                <Number>
                                    <AddSub>
                                        <AddRoundedIcon
                                            style={{ fill: '#F57738' }}
                                        />
                                    </AddSub>
                                    <Amount>1</Amount>
                                    <AddSub>
                                        <RemoveRoundedIcon
                                            style={{ fill: '#F57738' }}
                                        />
                                    </AddSub>
                                </Number>
                            </GameCart>
                        </Gameitem>
                    </Gamedetails>
                    <Order>
                        <Orderdet top={orderScroll ? '0px' : '55px'}>
                            <Title>Order Details</Title>
                            <Totaldiv>
                                <Totaltext>Number of Items</Totaltext>
                                <Totalprice>3</Totalprice>
                            </Totaldiv>
                            <Totaldiv>
                                <Totaltext>Actual Cost</Totaltext>
                                <Totalprice>₹3000</Totalprice>
                            </Totaldiv>
                            <Totaldiv>
                                <Totaltext>Shipping Charge</Totaltext>
                                <Totalprice>₹30</Totalprice>
                            </Totaldiv>
                            <Totaldiv>
                                <Totaltext total="a">Total</Totaltext>
                                <Totalprice total="a">₹3030</Totalprice>
                            </Totaldiv>
                            <Button>Check Out</Button>
                        </Orderdet>
                    </Order>
                </Items>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cartpage;
