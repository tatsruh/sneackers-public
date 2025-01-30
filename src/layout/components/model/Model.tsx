import {NavLink, useParams} from "react-router-dom";
import {S} from '../pages/_styles.ts';
import {adidasArray} from "../pages/Adidas.tsx";
import {pumaArray} from "../pages/Puma.tsx";
import {nikeArray} from "../pages/Nike.tsx"
import {SneackerItem} from "../main/MainPage.tsx";

type sneackersTypes = {
    [key: string]: (SneackerItem[]),
}
const sneackers: sneackersTypes = {
    adidas: adidasArray,
    puma: pumaArray,
    nike: nikeArray,
}

const Model = () => {
    const {model, id} = useParams();
    const sneackerArray = model ? sneackers[model.toLowerCase()] : undefined;
    const currentModel = sneackerArray?.find((item) => item.id === Number(id));

    return (
        <S.ModelContainer>
            <h2>{currentModel?.model.toUpperCase()}</h2>
            <h3>{currentModel?.collection}</h3>
            <h3>{currentModel?.price}</h3>
            {currentModel?.picture && <S.ImageSneacker src={currentModel.picture} alt={currentModel.model}/>}
            {!currentModel && <>
                <h2>Model Not Found</h2>
                <NavLink to={`/${model}`}>Return to the main page</NavLink>
            </>}
        </S.ModelContainer>
    );
};

export default Model;