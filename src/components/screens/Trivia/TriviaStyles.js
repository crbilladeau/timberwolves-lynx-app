import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 1px var(--lightGrey) solid;
  border-radius: 5px;
  margin: 15px;
  background-color: #ffffff;

  @media screen and (max-width: 850px) {
    flex-direction: column-reverse;
    border: none;
    margin: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &:nth-child(1) {
    align-self: flex-end;
    @media screen and (max-width: 850px) {
      align-self: center;
    }
  }
  &:nth-child(3) {
    align-self: flex-start;
    @media screen and (max-width: 850px) {
      align-self: flex-end;
    }
  }
`;

export const CountDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: var(--timberBlue);
  width: 100px;
  height: 100px;
  margin: 40px;
  align-self: flex-end;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 850px) {
    width: 50px;
    height: 50px;
    margin: 20px;
  }
  span {
    color: #ffffff;
    font-family: 'Futura Medium Bk', sans-serif;
    font-size: 50px;
    @media screen and (max-width: 850px) {
      font-size: 35px;
    }
  }
`;

export const TimberWolf = styled.img`
  width: 20vw;
  height: 100%auto;
  @media screen and (max-width: 850px) {
    width: 120px;
    margin: 20px;
  }
`;