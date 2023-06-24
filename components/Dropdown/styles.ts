import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
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
    margin-left: 100px;
    align-items: center;
    gap: 15px;
`;

export const TextOrder = styled.h3`
  font-size: 0.9rem;
`;

export const ContentDatePublication = styled.div`
    border: 1px solid #000;
    padding: 5px 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
`;

export const TextDate = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;

export const Line = styled.div`
  height: 2px;
  width: 60vw;
  margin: 15px 0;
  background-color: var(--third-color);
`;


