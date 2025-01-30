import Nike from "../pages/Nike.tsx";
import Adidas from "../pages/Adidas.tsx";
import Puma from "../pages/Puma.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "../pages/Error404.tsx";
import {S} from '../pages/_styles.ts'
import Model from "../model/Model.tsx";
import {Prices} from "../prices/Prices.tsx";
import Navbar from "../navigation/Navbar.tsx";
import {useState} from "react";
import ProtectedPage from "../pages/ProtectedPage.tsx";
import ProtectedRoute from "../pages/ProtectedRoute.tsx";
import {Button, NavigateLink} from "../button/Button.tsx";

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
    PRICE: '/price',
    PROTECTED: '/protected',
} as const;

type Props = {
    menu: boolean;
}

const MainPage = ({menu}: Props) => {

    return (
        <S.MainStyled>
            {menu && (<Navbar/>)}
            <S.Description>
                <Routes>
                    <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                    <Route path={PATH.PUMA} element={<Puma/>}/>
                    <Route path={PATH.NIKE} element={<Nike/>}/>
                    <Route path={PATH.ERROR} element={<Error404/>}/>
                    <Route path={PATH.PRICE} element={<Prices/>}></Route>
                    <Route path={PATH.PROTECTED} element={
                        <ProtectedRoute>
                            <ProtectedPage/>
                        </ProtectedRoute>
                    }></Route>
                    <Route path='*' element={<Error404/>}/>
                    <Route path='/' element={<Navigate to={PATH.ADIDAS}/>}/>
                    <Route path={'/:model/:id'} element={<Model/>}></Route>

                </Routes>
            </S.Description>
        </S.MainStyled>
    );
};

export default MainPage;