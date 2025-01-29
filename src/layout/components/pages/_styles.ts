import styled from "styled-components";

const MainStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white

`
const NavContainer = styled.div`
    height: 100%;
    background-color: white;
    width: 30%;
`
const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;
    & > a.active {
        color:blue;
    }
    & > a {
        color: black;
    }
`
const Description = styled.div`
    height: 80vh;
    background-color: black;
    min-width: 70%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ImageSneacker = styled.img `
    width: 300px;
    height: 300px;
    margin-right: 10px;
`

export const S = {
    MainStyled,
        NavContainer,
        NavWrapper,
        Description,
    ImageSneacker,
}