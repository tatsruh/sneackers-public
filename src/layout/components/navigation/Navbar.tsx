import {S} from "../pages/_styles.ts";
import {NavLink} from "react-router-dom";
import {PATH} from "../main/MainPage.tsx";

const Navbar = () => {
    return (
        <S.NavContainer>
            <div>
                <S.NavWrapper><NavLink
                    to={PATH.ADIDAS}> Adidas</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink
                    to={PATH.PUMA}> Puma</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink
                    to={PATH.NIKE}> Nike</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink
                    to={PATH.PRICE}>Prices</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink
                    to={PATH.PROTECTED}>Protected Page</NavLink></S.NavWrapper></div>

        </S.NavContainer>
    );
};

export default Navbar;