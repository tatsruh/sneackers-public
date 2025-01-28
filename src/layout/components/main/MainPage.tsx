import styled from "styled-components";
import PageThree from "../pages/PageThree.tsx";
import PageOne from "../pages/PageOne.tsx";
import PageTwo from "../pages/PageTwo.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "../pages/Error404.tsx";

const MainPage = () => {
    return (
        <MainStyled>
            <NavContainer>
                <div>Adidas</div>
                <div>Puma</div>
                <div>Nike</div>
            </NavContainer>
            <Description>
                <Routes>
                    <Route path='/adidas' element={<PageOne/>}/>
                    <Route path='/puma' element={<PageTwo/>}/>
                    <Route path='/nike' element={<PageThree/>}/>
                    <Route path='/notfound' element={<Error404/>}/>
                    <Route path='*' element={<Navigate to='/notfound'/>}/>
                    <Route path='/' element={<Navigate to='/adidas'/>}/>
                </Routes>
            </Description>
        </MainStyled>
    );
};
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
const Description = styled.div`
    height: 80vh;
    background-color: black;
    width: 70%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export default MainPage;