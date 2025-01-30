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
    max-width:300px;
`
const NavWrapper = styled.div`
    height: 70px;
    margin-left: 10px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    width: 100%;
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
const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DescriptionSneackers = styled.p`
    max-width: 920px;
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
`
const ModelContainer = styled.div`
    & > h2 {
        margin: 0
    }
    & > h3 {
        font-size: 24px;
        margin: 20px 0;
        font-weight: 400;
    }
`

export const S = {
    MainStyled,
        NavContainer,
        NavWrapper,
        Description,
    ImageSneacker,
    Content,
    DescriptionSneackers,
    ModelContainer,
}