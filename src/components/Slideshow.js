import { useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import styled from 'styled-components';
import { slide_images } from '../data';
import { mobile } from '../responsive';
const Slideshows = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    background-color: #fcd4a9;
    ${mobile({ height: '50vh' })};
`;
const Slidetitle = styled.h2`
    padding-bottom: 10px;
    margin: auto;
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
const Slider = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
    @media only screen and (max-width: 480px) {
        justify-content: unset;
    }
`;
const Slideimages = styled.div`
    display: flex;
    width: 70%;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (max-width: 480px) {
        width: 90%;
    }
`;
const Images = styled.img`
    max-width: 100%;
    transform: translateX(${(props) => props.slideIndex * -100}%);
    transition: all 0.5s ease;
    object-fit: cover;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    margin: auto;
    background-color: #4a4a4a;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
    ${mobile({ height: '26px', width: '26px', margin: '0' })};
`;
const Shopnow = styled.button`
    margin: auto;
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
const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Slideshows>
            <Slidetitle>Upcoming Titles</Slidetitle>
            <Slider>
                <Arrow onClick={() => handleClick('left')}>
                    <ArrowBackRoundedIcon style={{ fill: '#F57738' }} />
                </Arrow>
                <Slideimages>
                    {slide_images.map((item) => (
                        <Images
                            slideIndex={slideIndex}
                            src={item.img}
                            key={item.id}
                            alt=""
                        />
                    ))}
                </Slideimages>
                <Arrow onClick={() => handleClick('right')}>
                    <ArrowForwardRoundedIcon style={{ fill: '#F57738' }} />
                </Arrow>
            </Slider>
            <Shopnow>Shop Now</Shopnow>
        </Slideshows>
    );
};

export default Slideshow;
