
import Footer from '../components/Footer'
import Header from '../components/Header'
import styled from 'styled-components'
import Gameslsit from '../components/Gameslsit'
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

const Container = styled.div`

`
const Title = styled.h2`
    padding-bottom: 10px;
    padding-top: 10px;
    margin: auto;
    width: fit-content;
    position: relative;
    color: #F57738;
    border-radius: 10px;
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
const Filtercontainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 25px;
`
const Filtertext = styled.p`
    margin: 0 10px;
    color: #F57738;
    font-weight: bold;
`
const Select = styled.select`
    padding: 5px;
    border: none;
    color: #F57738;
    background-color: #fcd4a9;
`
const Option = styled.option`
`

const Games = () => {
    return (
        <Container>
            <Header />
            <Title>Choose your Games</Title>
            <Filtercontainer>
                <Filter>
                    <FilterListRoundedIcon style={{fill: '#F57738'}}/>
                    <Filtertext>Filter:</Filtertext>
                    <Select defaultValue = {'DEFAULT'}>
                        <Option disabled value="DEFAULT">Platform</Option>
                        <Option>PC</Option>
                        <Option>XBox</Option>
                        <Option>PS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <SortRoundedIcon style={{fill: '#F57738'}}/>
                    <Filtertext>Sort:</Filtertext>
                    <Select defaultValue = {'DEFAULT'}>
                        <Option disabled value="DEFAULT">Sort</Option>
                        <Option>Latest</Option>
                        <Option>Price (Asc)</Option>
                        <Option>Price (Dsc)</Option>
                    </Select>
                </Filter>
            </Filtercontainer>
            <Gameslsit />
            <Footer />
        </Container>
    )
}

export default Games
