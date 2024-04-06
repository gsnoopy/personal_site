import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #262626;
    cursor: url(http://www.rw-designer.com/cursor-extern.php?id=111497), auto;
`; 

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center; 
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: red;
`;

export const PopupContainer = styled.div`
  position: fixed; /* Mudando a posição para absoluta */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-color: white; /* Certifique-se de definir um fundo sólido */
  z-index: 999; /* Certifique-se de que o z-index seja alto o suficiente */
`;
