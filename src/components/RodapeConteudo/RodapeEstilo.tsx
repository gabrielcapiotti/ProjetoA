import styled from "styled-components";

export const RodapeEstilo = styled.div`
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 20vh;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main}; 
    transition: background-color 0.3s ease;
    border-radius: 0px 100px 0px 0px;

`;