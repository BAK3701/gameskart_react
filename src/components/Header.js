import './style.css'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import logo from './images/GamesKart.png'
//import menu_ic from './images/icons8-menu 1.png'
import { useState } from 'react';
import styled from "styled-components";
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

    &:hover{
        background-color: #F57738;
    }
`
const Header = () => {
    const [headerScroll, setHeaderScroll] = useState(false)
    var prevScrolls  = window.scrollY;
    const scrollsfunc = () => {
        if(window.scrollY < prevScrolls){
            setHeaderScroll(false)
        }
        else{
            setHeaderScroll(true)
        }
        prevScrolls = window.scrollY
    }
    window.addEventListener('scroll',scrollsfunc)
    return (
        <div className = {headerScroll ? "header active" : "header"}>
            <img className = 'header_logo' src={ logo } alt=''/>
            <div className="actual_nav">
                <nav>
                    <ul>
                        <li><a href="/#" className="page active">Home</a></li>
                        <li><a href="/#" className="page">Account</a></li>
                        <li><a href="/#" className="page">Games</a></li>
                        <li><a href="/#" className="page">About</a></li>
                        <li><a href="/#" className="page">Contact Us</a></li>
                    </ul>
                </nav>
                <Carticon>
                    <ShoppingCartRoundedIcon style={{fill: '#FFFFFF'}}/>
                </Carticon>
            </div>
        </div>
    )
}

export default Header
