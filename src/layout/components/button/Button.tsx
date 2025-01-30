import {NavLink, useNavigate} from "react-router-dom";
import styled from "styled-components";

export const Button = () => {
    return (
        <div>
           <NavLink to={'/adidas'}>Main Page</NavLink>
        </div>
    );
};



export const NavigateLink = () => {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <NavigateButton onClick={navigateBack}>&#x2190;</NavigateButton>
        </div>
    );
};

const NavigateButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: black;
    background-color: white;
`