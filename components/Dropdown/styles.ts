import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 15vw;
  padding-top: 80px;
  padding-bottom: 30px;
  box-sizing: border-box;
  border-bottom: 2px solid var(--third-color);
    @media (max-width: 992px) {
      margin: 0 5vw;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      
    }
`;

export const Navbar = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  align-content: end;
  align-items: center;
  box-sizing: border-box;
  gap: 15px;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
`;

export const NavbarButton = styled.div`
  border: 1px solid var(--link-color);
  padding: 8px 20px;
  border-radius: 50px;
  width: fit-content;
  &:hover{
    color: var(--button-color);
    border: 1px solid var(--button-color);
  }
  &:active{
    color: var(--main-color);
    border: 1px solid var(--button-color);
    background-color: var(--button-color)
  }
`;

export const Text = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const ContainerOrder = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
    div:nth-child(1) {
      width: 150px
    }
    @media (max-width: 1400px) {
      flex-direction: column;
      align-items: self-end;
    }
    @media (max-width: 768px) {
      flex-direction: row;
      margin-top: 20px;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 420px) {
      flex-direction: column;
      align-items: center
    }
    
`;

export const TextOrder = styled.h3`
  font-size: 1rem;
`;