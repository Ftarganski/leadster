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
  border-radius: 15px;
    svg{
      font-size: 15px;
      align-self: self-end;
      margin-right: 10px;
      margin-top: 10px;
      box-sizing: border-box;
      transition: transform 0.5s ease;
      &:hover{
        transform: rotate(180deg);
    }
  }
`;

export const ModalTittle = styled.h2`
display: flex;
align-items: center;
height: 80px;
font-size: 1.6rem;
font-weight: bold;
`;

export const ModalPlayer = styled.iframe`
 width: 560px;
 height: 315px;
 border: none;
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

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 20%;
  border-radius: 5px 0 0 5px;
    svg{
        font-size: 20px;
        margin:0;
        display: flex;
        align-self: center;
    }
`;

export const ModalDownloadButton = styled.a`
  display: flex;
  justify-content: space-evenly;
  height: 30px;
  align-items: center;
  
    &:nth-child(1){
      background: #c2f4ea;
      border-radius: 5px;
          div{
        color: #00ae7f;
      }
      ${Icon} {
        background: #9fefdf;
        svg {
          color: #00ae7f;
        }
      }
    }

    &:nth-child(2){
      background: #c2e6ff;
      border-radius: 5px;
      div{
        color: #279bf1;
      }
      ${Icon} {
        background: #1ad9ff;
        svg {
          color: #279bf1;
        }
      }
    }

    &:nth-child(3){
      background: #fff8d0;
      border-radius: 5px;
      div{
        color: #a99445;
      }
      ${Icon} {
        background: #fff1a0;
        svg {
          color: #a99445;
        }
      }
    }

`;

export const ModalButtonContent = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  width: 80%;
  display: flex;
  justify-content: center;
`;
