import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 175px;
  box-sizing: border-box;
  background-color: var(--second-color);
`;

export const TitleBalloon = styled.h4`
  font-size: .8rem;
  padding: 8px;
  border-radius: 50px;
  border-bottom-left-radius: 1px;
  border: 2px solid var(--button-color);
  color: var(--button-color);
`;

export const Subtitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  color: var(--button-color);
`;

export const Line = styled.div`
  height: 1px;
  width: 35vw;
  margin: 15px 0;
  box-sizing: border-box;
  background-color: var(--link-color);
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 1.05rem;
    span {
        font-weight: 600;
    }
`;

export const Content = styled.div`
    width: 625px;
    position: relative;
    img {
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 15px;
        margin-right: 10px;
    }
`;


