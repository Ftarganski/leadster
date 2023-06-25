import styled from 'styled-components';


export const Container = styled.div`
  background-color: var(--second-color);
  height: 700px;
  display: flex;
  width: 100vw;
  flex-direction: row;
  padding: 50px 0 0 0;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding-bottom: 30px;
  }
`;

export const Chart = styled.div`
  margin-left: 5vw;
  width: 45vw;
  display: flex;
  flex-direction: row;
  justify-content: end; 
  box-sizing: border-box;
  img {
    width: 600px;
    height: auto;
    @media (max-width: 768px) {
      width: 500px;
    }
    @media (max-width: 576px) {
      width: 400px;
    }
    @media (max-width: 420px) {
      width: 360px;
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    width: 100vw
  }
`;

export const Demo = styled.div`
  margin-right: 5vw;
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
    
    p {
      font-size: 1.3rem;
      font-weight: 400;
      padding-top: 10px;
      box-sizing: border-box;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      }
    @media (max-width: 1200px) {
      margin: 0;
      width: 90vw
    }
`;

export const DemoTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 80%;
  align-self: center;
    h2 {
      font-size: 3rem;
      font-weight: 400;
        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
        @media (max-width: 576px) {
          font-size: 2rem;
        }
        @media (max-width: 420px) {
          font-size: 1.8rem;  
        }
      }
    h2 > span{
      font-weight: 800;
    }
    p > span {
      font-weight: bold;
    } 
    @media (max-width: 768px) {
      width: 80vw
    }
    @media (max-width: 420px) {
      width: 100%;  
    }
`;

export const DemoBottom = styled.div`
  border-top: 2px solid var(--third-color);
  padding-top: 20px;
  box-sizing: border-box;
  width: 80%;
  align-self: center;
  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    height: 70px;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
      height: 150px;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-start;
      @media (max-width: 576px) {
        flex-direction: column;
      }
    }
  div:nth-child(2) p {
    font-size:1rem;
    font-weight: bold;
    align-self: center;
    padding: 0;
    @media (max-width: 1200px) {
      font-size:.9rem;
    }
    @media (max-width: 768px) {
      font-size: .8rem;
    }
    @media (max-width: 576px) {
      margin-top: 10px;
    }
  }
  div:nth-child(2) > img{
    margin: 0 5px;
    box-sizing: border-box;
    @media (max-width: 576px) {
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    margin: 0;
    width: 80vw
  }
  @media (max-width: 420px) {
    width: 90vw  
  }
`;

export const DemoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 70px;
  border-radius: 35px;
  background-color: var(--button-color);
  color: var(--main-color);
  font-weight: 600;
  font-size: 1rem;
  border-color: transparent;
  cursor: pointer;
    &:hover{
      background-color: var(--main-color);
    color: var(--button-color);
    border: 1px solid  var(--button-color)
    }
    @media (max-width: 1200px) {
      font-size:.9rem;
    }
    @media (max-width: 576px) {
      width: 70%;
    }
`;

export const LogoRDStation = styled.div`
  img{
    padding-left: 20px;
    box-sizing: border-box;
    margin: 0!important;
  }
  `;
