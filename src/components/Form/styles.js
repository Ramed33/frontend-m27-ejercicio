import styled from "styled-components";

const FormStyled = styled.form`
    padding: 30px;
    box-sizing: border-box;
    background-color: #00ffff;

    @media screen and (max-width: 1000px) {
        width: 50%;
    }

    p {
        color: aliceblue;
    }
`;

const FormTitle = styled.h3`
    font-size: ${props => props.primary ? "19px" : "25px" };
    font-weight: ${props => props.primary ? "500" : "600" };
    color: cadetblue;
`;

const FormInput = styled.input`
    padding: 10px 5px;
    font-size: 14px;
    font-weight: 400;
    width: 200px;
    border: none;
    margin-right: 50px;
`;

const FormButton = styled.button`
    padding: 10px 30px;
    background-color: ${props => props.primary ? "#333" : "#fff" };
    color: ${props => props.primary ? "#fff" : "#333" };
    font-weight: 600;
    display: inline-block;
    border-radius: 6px;
    border: none;
    cursor: pointer;
`;

export {
    FormStyled,
    FormTitle,
    FormInput,
    FormButton
}