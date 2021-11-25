import styled from "styled-components"
import { topsellers } from "../data"
import Topsellersitems from "./Topsellersitems"
import { latest } from "../data"

const MainCon = styled.div`

`
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-around;
    height: fit-content;
    width: 75vw;
    margin: auto;
`
const CategoryTitle = styled.h2`
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
const Topsellers = () => {
    return (
        <MainCon>
            <CategoryTitle>Top Sellers</CategoryTitle>
            <Container>
            {topsellers.map((item) => (
                <Topsellersitems item = {item} key = {item.id} />
            ))}
            </Container>
            <CategoryTitle>Latest Releases</CategoryTitle>
            <Container>
            {latest.map((item) => (
                <Topsellersitems item = {item} key = {item.id} />
            ))}
            </Container>
        </MainCon>
    )
}

export default Topsellers
