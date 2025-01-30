import styled from "styled-components";
import gitpic from '../../../assets/github.png'
import {S} from '../pages/_styles.ts'

const Footer = () => {
    return (
        <FooterStyled>

            <a href="https://github.com/tatsruh" target="_blank"> <S.Icon src={gitpic} alt="gitpic logo"/></a>
        </FooterStyled>
    );
};
const FooterStyled = styled.header`
    width: 100%;
    background-color: black;
    height: 10%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export default Footer;