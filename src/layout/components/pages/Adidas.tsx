import {SneackerItem} from "../main/MainPage.tsx";
import {S} from './_styles.ts';
import {NavLink} from "react-router-dom";
import pic1 from '../../../assets/281107-full_product.webp'
import pic2 from '../../../assets/Campus_00s_Shoes_Czern_HQ8708_01_standard.webp'
import pic3 from '../../../assets/Campus_00s_Shoes_Zielony_H03472_01_standard.webp'


export const AdidasArray: SneackerItem[] = [
    {model: 'HK39', collection: "Sport", price: '150$', picture: pic1, id: 1},
    {model: 'SK23', collection: "Classic", price: '100$', picture: pic2, id: 2},
    {model: 'KLL89', collection: "Pro", price: '200$', picture: pic3, id: 3},
]


const Adidas = () => {
    return (
        <div>
            <h2>Adidas</h2>
            {AdidasArray.map((el, i) => (
                <NavLink key={i} to={`/adidas/${el.id}`}>
                    <S.ImageSneacker src={el.picture} alt={el.model} />
                </NavLink>
            ))}
        </div>
    );
};

export default Adidas;