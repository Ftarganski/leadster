import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--main-color);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  justify-content: center; 
  justify-items: center;
  grid-row-gap: 30px;
  grid-column-gap: 15px;
  margin-top: 60px;
  box-sizing: border-box;
    @media (max-width: 1400px) {
      grid-row-gap: 0;
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr); 
    }
    @media (max-width: 992px) {
      width: 90%;
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr); 
    }
`;

export const VideoTitle = styled.h4`
height: 80px;
width: 80%;
display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.0rem;
    word-break: break-word;  
`;

export const VideoImage = styled.div`
  position: relative;
  img{
    display: flex;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: auto;
}
`;

export const PlayIcon = styled.div`
display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
`;

export const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-sizing: border-box
  margin: 0px;
  padding: 0px;
  background-color: var(--main-color);
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
    &:hover{
      ${PlayIcon} {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ${VideoTitle} {
      color: var(--button-color)
      }
      ${VideoImage}{
      position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--button-color);
          opacity: 0.4;
          border-radius: 20px 20px 0 0;
          padding: 0;
          margin: 0
        }
      }
    }
    @media (max-width: 1400px) {
      margin: 10px;
    }
`;

export const CountPages = styled.div`
  width: 70vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
  box-sizing: border-box;
  border-top: 2px solid var(--third-color);
  font-size: 1.5rem;
  font-weight: bold;
    @media (max-width: 992px) {
      width: 90%;
      font-size: 1.3rem;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media (max-width: 576px) {
      font-size: 1.1rem;
    }
    @media (max-width: 420px) {
      font-size: 1.0rem;
    }
`;

export const CountPagesButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 10px;
  width: 40px;
  heigth: 40px;
  border: none;
  background-color: transparent;
    &:hover{
      border: 1.5px solid var(--button-color);
      border-radius: 5px;
      color: var(--button-color)
    }
    @media (max-width: 992px) {
      font-size: 1.3rem;
      width: 38px;
      heigth: 38px;
      margin-right: 9px;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
      width: 35px;
      heigth: 35px;
      margin-right: 9px;
    }
    @media (max-width: 576px) {
      font-size: 1.1rem;
      width: 32px;
      heigth: 32px;
      margin-right: 6px;
    }
    @media (max-width: 420px) {
      font-size: 1.0rem;
      width: 32px;
      heigth: 32px;
      margin-right: 5px;
    }
`;


