import {SneackerItem} from "../main/MainPage.tsx";
import {S} from './_styles.ts';
import {NavLink} from "react-router-dom";
import pic1 from '../../../assets/281107-full_product.webp'
import pic2 from '../../../assets/Campus_00s_Shoes_Czern_HQ8708_01_standard.webp'
import pic3 from '../../../assets/Campus_00s_Shoes_Zielony_H03472_01_standard.webp'


export const adidasArray: SneackerItem[] = [
    {model: 'adidas', collection: "Sport", price: '150$', picture: pic1, id: 1},
    {model: 'adidas', collection: "Classic", price: '100$', picture: pic2, id: 2},
    {model: 'adidas', collection: "Pro", price: '200$', picture: pic3, id: 3},
]


const Adidas = () => {
    return (
        <S.Content>
            <h2>Adidas</h2>
            <div>
                {adidasArray.map((el, i) => (
                    <NavLink key={i} to={`/${el.model}/${el.id}`}>
                        <S.ImageSneacker src={el.picture} alt={el.model}/>
                    </NavLink>
                ))}</div>
            <S.DescriptionSneackers>Founded in 1949 by Adolf Dassler in Germany, Adidas is known for its iconic three-stripe logo. It
                produces sportswear, footwear, and accessories, sponsoring athletes and teams worldwide. Adidas
                emphasizes innovation, sustainability, and streetwear fashion.</S.DescriptionSneackers>

        </S.Content>
    );
};

export default Adidas;