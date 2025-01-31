import {S} from "./_styles.ts";
import pic1 from "/public/AIR+FORCE+1+'07.webp";
import pic2 from "/public/AIR+MAX+PLUS.webp";
import pic3 from "/public/NIKE+DUNK+LOW+RETRO.webp";
import {SneackerItem} from "../main/MainPage.tsx";
import {NavLink} from "react-router-dom";


export const nikeArray: SneackerItem[] = [
    {model: 'nike', collection: "Sport", price: '150$', picture: pic1, id: 1},
    {model: 'nike', collection: "Classic", price: '100$', picture: pic2, id: 2},
    {model: 'nike', collection: "Pro", price: '200$', picture: pic3, id: 3},
]

const Nike = () => {
    return (
        <S.Content>
            <h2>Nike</h2>
            <div>
                {nikeArray.map((el, i) => (
                    <NavLink key={i} to={`/${el.model}/${el.id}`}>
                        <S.ImageSneacker src={el.picture} alt={el.model}/>
                    </NavLink>
                ))}</div>
            <S.DescriptionSneackers>Founded in 1964 as Blue Ribbon Sports and renamed Nike in 1971, the U.S.-based
                company dominates the sportswear industry. Its Swoosh logo and "Just Do It" slogan are globally
                recognized. Nike invests in innovation, athlete sponsorships, and high-performance
                gear..</S.DescriptionSneackers>

        </S.Content>
    );
};

export default Nike;

