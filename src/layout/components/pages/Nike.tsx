import {S} from "./_styles.ts";
import pic1 from "../../../assets/AIR+FORCE+1+'07.webp";
import pic2 from "../../../assets/AIR+MAX+PLUS.webp";
import pic3 from "../../../assets/NIKE+DUNK+LOW+RETRO.webp";
import {SneackerItem} from "../main/MainPage.tsx";
import {NavLink} from "react-router-dom";


const NikeArray: SneackerItem[] = [
    {model: 'HPP232', collection: "Sport", price: '150$', picture: pic1, id: 1},
    {model: 'WEE232', collection: "Classic", price: '100$', picture: pic2, id: 2},
    {model: 'HIO89', collection: "Pro", price: '200$', picture: pic3, id: 3},
]

const Nike = () => {
    return (
        <div>
            <h2>Nike</h2>
            {NikeArray.map((el, i) => (
                <NavLink key={i} to={`/nike/${el.id}`}>
                    <S.ImageSneacker src={el.picture} alt={el.model} />
                </NavLink>
            ))}
        </div>
    );
};

export default Nike;