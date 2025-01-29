import {S} from "./_styles.ts";
import pic1 from "../../../assets/395205_21_sv01.webp";
import pic2 from "../../../assets/Sneakersy-unisex-Palermo-ze-skóry.webp";
import pic3 from "../../../assets/Sneakersy-Rebound.webp";
import {SneackerItem} from "../main/MainPage.tsx";
import {NavLink} from "react-router-dom";


const PumaArray: SneackerItem[] = [
    {model: 'HK39', collection: "Sport", price: '150$', picture: pic1, id: 1},
    {model: 'SK23', collection: "Classic", price: '100$', picture: pic2, id: 2},
    {model: 'KLL89', collection: "Pro", price: '200$', picture: pic3, id: 3},
]


const Puma = () => {
    return (
        <div>
            <h2>Puma</h2>
            {PumaArray.map((el, i) => (
                <NavLink key={i} to={`/puma/${el.id}`}>
                    <S.ImageSneacker src={el.picture} alt={el.model} />
                </NavLink>
            ))}
        </div>
    );
};

export default Puma;