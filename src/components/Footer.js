import React from 'react';
import styled from 'styled-components';
import footer_logo from './images/GamesKart_footer.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import { mobile } from '../responsive';

const Container = styled.div`
    background-color: #4a4a4a;
    height: 30vh;
    display: flex;
    flex-wrap: wrap;
    ${mobile({ width: '100%' })};
`;
const Download = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Badge = styled.img`
    width: 50%;
`;
const App = styled.p`
    color: white;
`;

const Comapany = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Logo = styled.img`
    ${mobile({ width: '100%' })};
`;

const Social = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Iconsec = styled.div`
    margin: 20px 0;
    display: flex;
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.icons === 'f' && '#4267B2'};
    background-color: ${(props) => props.icons === 'i' && ' #E1306C'};
    background-color: ${(props) => props.icons === 't' && '#1DA1F2'};
    background-color: ${(props) => props.icons === 'r' && ' #ff4500'};
    margin: 0 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const Footer = () => {
    return (
        <div>
            <Container>
                <Download>
                    <App>Get Our Official App</App>
                    <Badge src="images/google-play-badge.png" alt="" />
                </Download>
                <Comapany>
                    <Logo src={footer_logo} alt="" />
                    <App>Best Online Game Store</App>
                </Comapany>
                <Social>
                    <App>Follow us on</App>
                    <Iconsec>
                        <Icon icons="f">
                            <FacebookIcon style={{ fill: '#FFFFFF' }} />
                        </Icon>
                        <Icon icons="i">
                            <InstagramIcon style={{ fill: '#FFFFFF' }} />
                        </Icon>
                        <Icon icons="t">
                            <TwitterIcon style={{ fill: '#FFFFFF' }} />
                        </Icon>
                        <Icon icons="r">
                            <RedditIcon style={{ fill: '#FFFFFF' }} />
                        </Icon>
                    </Iconsec>
                </Social>
            </Container>
        </div>
    );
};

export default Footer;
