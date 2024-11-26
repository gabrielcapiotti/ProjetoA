import styled from "styled-components";

export const ConteudoEstilo = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-content: center;
    width: 100%;
    gap: 20px; 
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    transition: background-color 0.3s ease;

`;

export const Direita = styled.div`
    width: 45%; 
    justify-content: center;
    align-content: center;
    text-align: justify;
    margin: 20px;
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

`;

export const Esquerda = styled.div`
    width: 45%;
    justify-content: center;
    align-content: center;
    text-align: justify;
    margin-bottom: 20px;
    margin: 20px;
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

`;

export const ContainerAbaixo = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%; 
    text-align: justify;
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 8px;
    transition: background-color 0.3s ease;

`;
