import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--main-color);
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-self: center;
    img {
      align-self: center;
      margin-top: 50px;
      box-sizing: border-box;
      }
`;

export const TitleSlogan = styled.h6`
  font-size: medium;
  align-self: center;
  margin-top: 10px;
  box-sizing: border-box;
  margin-bottom: 25px;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  width: 70vw;
  align-self: center;
  margin-top: 25px;
  margin-bottom: 25px;
  box-sizing: border-box;
  justify-content: space-between;
    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
`;

export const BlockLinks = styled.div`
  h5 {
    font-size: large;
    padding: 10px 0 20px 0;
    box-sizing: border-box;
    font-weight: 700;
    }
  ul {
    list-style: none;
    }
  ul > li {
    font-size: 1.0rem;
    padding: 20px 0 0 0;
    box-sizing: border-box;
    color: var(--link-color);
    font-weight: 500;
    }
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: var(--link-color);
    &:hover{
      color: var(--button-color)
    }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  box-sizing: border-box;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: var(--third-color);
  svg{
    fill: var(--link-color);
    stroke: var(--link-color);
    height: 18px;
    width: 18px
  }
  @media (max-width: 1200px) {
    margin-right: 8px;
  }
`;

export const FooterBar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  border-top: 2px solid var(--second-color);
    ul {
      height: 100px;
      width: 70vw;
      display: flex;
      list-style: none;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: space-evenly;
      }
    }
    ul > li {
      font-size: .85rem;
      @media (max-width: 1400px) {
        font-size: .74rem;
      }
    }
    ul > li:first-of-type > a{
      color: var(--button-color);
      font-weight: bold
    }
    ul > li:fnth-of-type(2) > a{
      &:hover{
        color: var(--button-color)
      }
    }
`;

export const LinkBar = styled.a`
  font-size: .85rem;
  font-weight: 500;
  color: var(--link-color);
    &:hover{
      color: var(--button-color)
    }
      
`;