import './style.css'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import logo from './images/GamesKart.png'
import menu_ic from './images/icons8-menu 1.png'
import styled from "styled-components";
const Carticon = styled.div`
    width: fit-content;
    height: fit-content;
    margin-right: 25px;
    cursor: pointer;
`
const Header = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
    return (
        <div className = 'header' id="header">
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
                <img className = 'menu_logo' src={ menu_ic } alt="" />
                <Carticon>
                    <ShoppingCartRoundedIcon style={{fill: '#FFFFFF'}}/>
                </Carticon>
            </div>
        </div>
    )
}

export default Header
