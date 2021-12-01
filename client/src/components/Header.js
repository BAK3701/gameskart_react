import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import logo from './images/GamesKart.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const HeaderDiv = styled.div`
    justify-content: space-between;
    align-items: center;
    background-color: #4a4a4a;
    display: flex;
    height: 50px;
    position: sticky;
    z-index: 100;
    top: ${(props) => props.top};
    transition: top 0.5s ease;
    border: none;
`;
const LogoImage = styled.img`
    object-fit: contain;
    width: 125px;
    margin-left: 25px;
    ${mobile({ marginLeft: '10px' })};
`;
const ActualNav = styled.div`
    display: flex;
    align-items: center;
`;

const Navi = styled.nav`
    @media only screen and (max-width: 480px) {
        position: absolute;
        top: 50px;
        width: 100%;
        left: 0px;
        background-color: #4a4a4a;
        height: ${(props) => props.show};
        overflow: hidden;
        transition: all 0.5s ease;
    }
`;
const UnList = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const List = styled.li`
    margin-right: 40px;
    ${mobile({
        margin: '10px',
        textAlign: 'right',
    })};
`;
const Links = styled.a`
    text-decoration: none;
    color: #ffffff;
    padding: 3px;
    border-radius: 5px;
    transition: all 0.5s ease;
    background-color: ${(props) => props.bgreq === props.bg && '#f57738'};

    &:hover {
        background-color: #f57738;
    }
`;

const Carticon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 25px;
    cursor: pointer;
    transition: all 0.5s ease;
    background-color: ${(props) => props.bgreq === props.bg && '#f57738'};
    ${mobile({ marginRight: '10px' })};

    &:hover {
        background-color: #f57738;
    }
`;
const MenuIcon = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 25px;
    cursor: pointer;
    transition: all 0.5s ease;
    ${mobile({ display: 'flex', marginRight: '10px' })};
`;
const Header = ({ item }) => {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    var prevScrolls = window.scrollY;
    const scrollsfunc = () => {
        if (window.scrollY < prevScrolls) {
            setHeaderScroll(false);
        } else {
            setHeaderScroll(true);
        }
        prevScrolls = window.scrollY;
    };
    window.addEventListener('scroll', scrollsfunc);
    const menuOption = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };
    return (
        <HeaderDiv top={headerScroll ? '-50px' : '0px'}>
            <LogoImage src={logo} alt="" />
            <ActualNav>
                <Navi show={showMenu ? '225px' : '0px'}>
                    <UnList>
                        <List>
                            <Links href="/#" bgreq={item} bg="h">
                                Home
                            </Links>
                        </List>
                        <List>
                            <Links href="/#" bgreq={item} bg="ac">
                                Account
                            </Links>
                        </List>
                        <List>
                            <Links href="/#" bgreq={item} bg="g">
                                Games
                            </Links>
                        </List>
                        <List>
                            <Links href="/#" bgreq={item} bg="ab">
                                About
                            </Links>
                        </List>
                        <List>
                            <Links href="/#" bgreq={item} bg="c">
                                Contact Us
                            </Links>
                        </List>
                    </UnList>
                </Navi>
                <Carticon bgreq={item} bg="sc">
                    <ShoppingCartRoundedIcon style={{ fill: '#FFFFFF' }} />
                </Carticon>
                <MenuIcon onClick={() => menuOption()}>
                    <MenuRoundedIcon style={{ fill: '#FFFFFF' }} />
                </MenuIcon>
            </ActualNav>
        </HeaderDiv>
    );
};

export default Header;
