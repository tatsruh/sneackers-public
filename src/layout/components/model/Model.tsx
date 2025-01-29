import {useParams} from "react-router-dom";
import {S} from '../pages/_styles.ts'
import {AdidasArray} from "../pages/Adidas.tsx";

const Model = () => {
    const params = useParams();
    const model = params.id ?
        AdidasArray.find((adida) => adida.id === Number(params.id)) : null;
    return (
        <div>
            <h2>{model?.model}</h2>
            <h3>{model?.collection}</h3>
            <h4>{model?.price}</h4>
            {model?.picture && <S.ImageSneacker src={model.picture} alt={model.model}/>}
            {!model && <h2>Model Not Found</h2>}
        </div>
    );
};

export default Model;