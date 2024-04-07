import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #262626;
    cursor: url(http://www.rw-designer.com/cursor-extern.php?id=111497), auto;
    align-items: center;
    justify-content: center;
  }
`;

export const PageContainer = styled.div`  
  width: 100%;
  margin: 0 auto; 
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
  }

`;

export const PopupContainer = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-color: white; 
  z-index: 999;
  width: 80%;
  height: 80%;
`;


export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

export const IconText = styled.p`
  text-align: center;
  margin-top: 5px;
  font-family: Tahoma, Arial, sans-serif;
  color: white;
  @media (max-width: 768px) {
    font-size: 9px
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 20px; 
  color: white; 
  font-family: Tahoma, Arial, sans-serif; 
  @media (max-width: 768px) {
    font-size: 10px; 
  }
`;

