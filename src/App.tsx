import './App.css'
import MainPage from "./layout/components/main/MainPage.tsx";
import Header from "./layout/components/header/Header.tsx";
import Footer from "./layout/components/footer/Footer.tsx";
import {useState} from "react";
import {NavigateLink} from "./layout/components/button/Button.tsx";
import styled from "styled-components";

function App() {
    const [menu, openMenu] = useState(false);

    const onClick = () => {
        openMenu(!menu);
    }


    return (
        <div style={{height: '100vh'}}>
            <ContainerButtons>
                <NavigateLink></NavigateLink>
            </ContainerButtons>
            <Header onClick={onClick}></Header>
            <MainPage menu={menu}></MainPage>
            <Footer></Footer>
        </div>


    )
}
const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 10%;
    left: 95%;

`
export default App
