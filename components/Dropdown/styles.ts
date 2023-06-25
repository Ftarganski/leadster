import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Navbar = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
  gap: 15px;
`;

export const NavbarButton = styled.div`
  border: 1px solid var(--link-color);
  padding: 8px 20px;
  border-radius: 50px;
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
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 15px;
    width: 30%;
    div:nth-child(1) {
      width: 150px
    }
    
`;

export const TextOrder = styled.h3`
  font-size: 1rem;
`;


export const Line = styled.div`
  height: 2px;
  width: 100vw;
  margin-top: 30px;
  box-sizing: border-box;
  background-color: var(--third-color);
`;


