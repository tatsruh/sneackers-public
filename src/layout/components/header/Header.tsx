import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyled>
            HEADER
        </HeaderStyled>
    );
};
const HeaderStyled = styled.header`
    width: 100%;
    background-color: black;
    height: 10vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default Header;