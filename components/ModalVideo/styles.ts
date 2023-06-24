import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--modal-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--main-color);
  align-items: center;
  width: 560px;
  height: 85vh;
  overflow-y: auto;
  border-top: 5px solid var(--button-color);
  border-radius: 15px
`;

export const ModalTittle = styled.h2`
display: flex;
align-items: center;
height: 100px;
font-size: 1.6rem;
font-weight: bold;
`;

export const ModalPlayer = styled.iframe`
 width: 560px;
 height: 315px;
`;

export const ModalSubTitle = styled.div`
display: flex;
align-items: center;
font-size: 1rem;
font-weight: bold;
height: 40px;
width: 90%;
border-bottom: 2px solid var(--third-color);
`;

export const ModalDescription = styled.p`
display: flex;
width: 90%;
font-weight: 400;
margin: 10px 0;
box-sizing: border-box;
`;

export const ModalDownloads = styled.div`
display: grid;
justify-content: space-between;
grid-template-columns: 30% 30% 30%;
width: 90%;
height: 50px;
margin-top: 10px;
box-sizing: border-box;
align-content: center;
`;

export const ModalDownloadButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 30px;
  align-items: center;
    &:nth-child(1){
      background: #90ffd1;
      border-radius: 5px;
      svg{
        color: green;
        font-size: 20px;
      }
      div{
        color: green;
      }
    }

    &:nth-child(2){
      background: #a7e6ff;
      border-radius: 5px;
      svg{
        color: #394e61;
        font-size: 20px;
      }
      div{
        color: #394e61;
      }
    }

    &:nth-child(3){
      background: rgb(255, 213, 134);
      border-radius: 5px;
      svg{
        color: orange;
        font-size: 20px;
      }
      div{
        color: orange;
      }
    }

`;

export const ModalButtonContent = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;
