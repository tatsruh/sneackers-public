import {S} from "./_styles.ts";
import pic1 from "../../../assets/395205_21_sv01.webp";
import pic2 from "../../../assets/Sneakersy-unisex-Palermo-ze-skóry.webp";
import pic3 from "../../../assets/Sneakersy-Rebound.webp";
import {SneackerItem} from "../main/MainPage.tsx";
import {NavLink} from "react-router-dom";


export const pumaArray: SneackerItem[] = [
    {model: 'puma', collection: "Sport", price: '150$', picture: pic1, id: 1},
    {model: 'puma', collection: "Classic", price: '100$', picture: pic2, id: 2},
    {model: 'puma', collection: "Pro", price: '200$', picture: pic3, id: 3},
]


const Puma = () => {
    return (
        <S.Content>
            <h2>Puma</h2>
            <div>
                {pumaArray.map((el, i) => (
                    <NavLink key={i} to={`/${el.model}/${el.id}`}>
                        <S.ImageSneacker src={el.picture} alt={el.model}/>
                    </NavLink>
                ))}</div>
            <S.DescriptionSneackers>Puma was founded in 1948 by Rudolf Dassler, Adolf Dassler’s brother, in Germany. It
                specializes in athletic footwear, apparel, and accessories. Puma is known for collaborations with
                athletes, fashion designers, and celebrities, blending sports and lifestyle
                trends.</S.DescriptionSneackers>

        </S.Content>
    );
};

export default Puma;