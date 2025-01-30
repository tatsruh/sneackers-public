import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyled>
            <ShopName>
                Sneackers Shop
            </ShopName>
            <span>Est 2012</span>
        </HeaderStyled>
    );
};
const HeaderStyled = styled.header`
    width: 100%;
    background-color: black;
    height: 10vh;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    align-items: center;
`
const ShopName = styled.span`
    color: white;
    font-size: 24px;
`

export default Header;