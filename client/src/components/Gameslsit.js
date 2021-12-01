import { mobile } from "../responsive"
import styled from "styled-components"
import { games_page } from '../data'
import Gamesitems from './Gamesitems'

const Container = styled.div`
    display: flex;
    padding: 20px;
    width: 75vw;
    justify-content: space-evenly;
    height: fit-content;
    flex-wrap: wrap;
    margin: auto;
    ${mobile({ padding : '10px' })};
`

const Gameslsit = () => {
    return (
        <Container>
            {games_page.map((item) => (
                <Gamesitems item = {item} key = {item.id} />
            ))}
        </Container>
    )
}

export default Gameslsit
