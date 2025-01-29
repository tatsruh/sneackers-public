import Nike from "../pages/Nike.tsx";
import Adidas from "../pages/Adidas.tsx";
import Puma from "../pages/Puma.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import Error404 from "../pages/Error404.tsx";
import {S} from '../pages/_styles.ts'
import Model from "../model/Model.tsx";

export type SneackerItem = {
    model: string;
    collection: string;
    price: string;
    picture: string;
    id: number;
}
//path
export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    ERROR: '/notfound',
    MODEL: '/adidas/:id'
} as const;

const MainPage = () => {
    return (
        <S.MainStyled>
            <S.NavContainer>
                <S.NavWrapper><NavLink
                    to={PATH.ADIDAS}> Adidas</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink
                    to={PATH.PUMA}> Puma</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink
                    to={PATH.NIKE}> Nike</NavLink></S.NavWrapper>
            </S.NavContainer>
            <S.Description>
                <Routes>
                    <Route path={PATH.ADIDAS} element={<Adidas />}/>
                    <Route path={PATH.PUMA} element={<Puma/>}/>
                    <Route path={PATH.NIKE} element={<Nike/>}/>
                    <Route path={PATH.ERROR} element={<Error404/>}/>
                    <Route path='*' element={<Error404/>}/>
                    <Route path='/' element={<Navigate to={PATH.ADIDAS}/>}/>
                    <Route path={'/adidas/:id'} element={<Model/>}></Route>
                </Routes>
            </S.Description>
        </S.MainStyled>
    );
};

export default MainPage;