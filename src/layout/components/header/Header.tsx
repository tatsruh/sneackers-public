import styled from "styled-components";

type Props = {
   onClick?: () => void;
}

const Header = (props: Props) => {
    return (
        <HeaderStyled>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '30px'}} onClick={props.onClick}>
                <MenuLogo >
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuLogo>
                <ShopName>
                    Sneackers Shop
                </ShopName>

            </div>

            <span>Est 2012</span>
        </HeaderStyled>
    );
};
const HeaderStyled = styled.header`
    width: 100%;
    background-color: black;
    height: 10%;
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
const MenuLogo = styled.div`
    & > span {
        position: absolute;
        height: 3px;
        width: 100%;
        background: white;
        transition: 0.5s;
    }
    & > span:nth-child(1) { top: 12px; }
    & > span:nth-child(3) { top: 24px; }

    display: flex;
    justify-content: center;
    margin-top: -30px;
    background: black;
    width: 40px; /* less width = square hamburger */
    position: relative;
    cursor: pointer;
`

export default Header;