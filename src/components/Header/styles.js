import styled from "styled-components";

const MainHeader = styled.header`
    background-color: #00ffff;
    width: 100%;
    padding: 20px;
    border-bottom: 3px solid #87ceeb;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`;

const TitleHeader = styled.h1`
    font-weight: 600;
    font-size: xx-large;
`;

const NavHeader = styled.nav`
    width: 96px;
    display:grid;
    gap: 10px;

    a{
        font-size: x-large;
        text-decoration: none;
        font-weight: 600;
    }
`;

export {
    MainHeader,
    TitleHeader,
    NavHeader
}