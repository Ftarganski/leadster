import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 175px 0;
  box-sizing: border-box;
  background-color: var(--second-color);
    @media (max-width: 992px) {
      padding: 115px 0;     
    }
    @media (max-width: 576px) {
      padding: 80px 0;     
    }
    @media (max-width: 460px) {
      padding: 50px 0;   
    }
`;

export const TitleBalloon = styled.h4`
  font-size: .8rem;
  padding: 8px;
  border-radius: 50px;
  border-bottom-left-radius: 1px;
  border: 2px solid var(--button-color);
  color: var(--button-color);
    @media (max-width: 992px) {
      font-size: .7rem;     
    }
    @media (max-width: 576px) {
      font-size: .6rem;
    }
`;

export const Subtitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
    @media (max-width: 992px) {
        font-size: 2.4rem;     
    }
    @media (max-width: 576px) {
      font-size: 2rem;
    }
    @media (max-width: 460px) {
      font-size: 1.9rem;   
    }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  font-weight: 800;
  color: var(--button-color);
    @media (max-width: 992px) {
      font-size: 4rem; 
    }
    @media (max-width: 576px) {
      font-size: 3.5rem;
    }
    @media (max-width: 460px) {
      font-size: 3.1rem;   
    }
`;

export const Line = styled.div`
  height: 2px;
  width: 625px;
  margin: 15px 0;
  box-sizing: border-box;
  background-color: var(--third-color);
    @media (max-width: 992px) {
      width: 500px;    
    }
    @media (max-width: 576px) {
      width: 420px;    
    }
    @media (max-width: 460px) {
      width: 380px;    
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
        box-sizing: border-box;
        @media (max-width: 992px) {
          margin-top: 8px;
          margin-right: 60px;
          box-sizing: border-box;
        }
        @media (max-width: 576px) {
          margin-top: 3px;
          margin-right: 88px;
          box-sizing: border-box;
        }
        @media (max-width: 460px) {
          margin-top: 0;
          margin-right: 110px;
          box-sizing: border-box;
        }
    }
`;

export const Slogan = styled.p`

  font-weight: 300;
  font-size: 1.05rem;
    span {
        font-weight: 600;
    }
    @media (max-width: 992px) {
    font-size: 0.85rem; 
    }
    @media (max-width: 576px) {
      width: 420px;  
    }
    @media (max-width: 460px) {
      width: 380px;  
    }
`;


