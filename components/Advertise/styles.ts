import styled from 'styled-components';


export const Container = styled.div`
  background-color: var(--second-color);
  height: 700px;
  display: flex;
  width: 100vw;
  flex-direction: row;
  padding: 50px 0 0 0;
  box-sizing: border-box;
`;

export const Chart = styled.div`
  margin-left: 5vw;
  width: 45vw;
  display: flex;
  flex-direction: row;
  justify-content: end; 
`;

export const Demo = styled.div`
  margin-right: 5vw;
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
    h2 {
      font-size: 2.5rem;
      font-weight: 800;
      }
    p {
      font-size: 1.3rem;
      font-weight: 400;
      padding-top: 10px;
      box-sizing: border-box;
      }
`;

export const DemoTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 80%;
  align-self: center;
    p > span {
      font-weight: bold;
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
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-start;
  }
  div:nth-child(2) p {
    font-size:medium;
    font-weight: bold;
    align-self: center;
    padding: 0;
  }
  div:nth-child(2) > img{
    margin: 0 5px;
    box-sizing: border-box;
  }
`;

export const LogoRDStation = styled.div`
  img{
    padding-left: 20px;
    box-sizing: border-box;
    margin: 0!important;
  }
  `;

export const DemoButton = styled.button`
  width: 40%;
  border-radius: 35px;
  background-color: var(--button-color);
  color: var(--main-color);
  font-weight: 600;
  font-size: 1.1rem;
  border-color: transparent;
  cursor: pointer;
`;
