import React from 'react';
import styled from 'styled-components';
import image1 from './images/pexels-photo-3945659.jpeg';
import image2 from './images/Group 5.png';
import { mobile } from '../responsive';

const Introa = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    ${mobile({ height: '50vh' })};
`;

const Divi = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    object-fit: cover;
    ${mobile({ display: 'none' })};
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Image1 = styled.img`
    ${mobile({ width: '100%' })};
`;
const Text1 = styled.p`
    color: #f57738;
    text-align: center;
    font-size: 30px;
`;
const Shopnow = styled.button`
    text-align: center;
    margin: 50px auto;
    background-color: #4a4a4a;
    color: #f57738;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-size: large;
    font-weight: bold;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
const Intro = () => {
    return (
        <Introa>
            <Image src={image1} />
            <Divi>
                <Text>
                    <Image1 src={image2} />
                    <Text1>Best Online Game Store</Text1>
                    <Shopnow>Explore Now</Shopnow>
                </Text>
            </Divi>
        </Introa>
    );
};

export default Intro;
