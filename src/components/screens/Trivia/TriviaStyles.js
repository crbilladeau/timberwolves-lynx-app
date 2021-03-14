import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px var(--lightGrey) solid;
  border-radius: 5px;
  margin: 20px;
  height: 900px;
  background-color: #ffffff;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: calc(33.333333% - 30px);
  margin: 15px;
  &:nth-child(1) {
    align-self: flex-end;
  }
  &:nth-child(3) {
    align-self: flex-start;
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
  span {
    color: #ffffff;
    font-family: 'Futura Medium Bk', sans-serif;
    font-size: 50px;
  }
`;

export const TimberWolf = styled.img`
  width: 350px;
  height: 100%auto;
`;