import styled from "styled-components";




export const Botoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-weight: bolder;
    font-size: 16px;
    width: 150px;
    height: 40px;
    padding: 15px;
    margin-right: 10px;
    border-radius: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    transition: all 0.4s ease-in-out;

    &:hover {
        filter: brightness(1.2);
        transform: scale(1.08);
    }

`;




