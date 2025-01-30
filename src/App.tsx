import './App.css'
import MainPage from "./layout/components/main/MainPage.tsx";
import Header from "./layout/components/header/Header.tsx";
import Footer from "./layout/components/footer/Footer.tsx";
import {useState} from "react";

function App() {
    const [menu, openMenu] = useState(false);

    const onClick = () => {
        openMenu(!menu);
    }


    return (
        <div style={{height: '100vh'}}>
            <Header onClick={onClick}></Header>
            <MainPage menu={menu}></MainPage>
            <Footer></Footer>
        </div>


    )
}

export default App
