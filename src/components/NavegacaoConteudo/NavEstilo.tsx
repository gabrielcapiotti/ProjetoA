import styled from "styled-components";


export const BarraNavegacaoEstilo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.palette.primary.main}; 
  transition: background-color 0.3s ease;
`;

export const NavegadorBotoes = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: end;
    width: 100%;
`;

export const ConteudoCentroEstilo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: auto;
    width: 80%;
    padding: 10px;
`;
export const NavBotoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 10vh;
    width: 40%;
`;



