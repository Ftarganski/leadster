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
  grid-template-columns: 25% 25% 25% 25%;
  width: 70vw;
  align-self: center;
  margin-top: 25px;
  box-sizing: border-box;
  justify-content: space-between;
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
    font-size: medium;
    padding: 20px 0 0 0;
    box-sizing: border-box;
    color: var(--link-color);
    font-weight: 500;
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
    }
`;

export const Link = styled.a`
font-size: smaller;
      font-weight: 500;
      color: var(--link-color);
      &:hover{
        color: var(--button-color)
      }
`;