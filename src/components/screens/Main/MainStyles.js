import styled from 'styled-components';
import brushStroke from '../../../images/brush-stroke.svg';
import squares from '../../../images/squares.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  main {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 1000px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  &:nth-of-type(1) {
    flex-grow: 2;
    align-items: center;
    margin-bottom: 100px;
  }
  &:nth-of-type(2) {
    flex-grow: 1;
    align-items: flex-end;
  }

  h1 {
    font-size: 120px;
    font-family: 'Edo SZ', sans-serif;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
  }

  h3 {
    font-size: 30px;
    font-family: 'Futura Light Bk', sans-serif;
    font-weight: 400;
    text-align: center;
    max-width: 650px;
    margin: 20px;
  }

  p {
    font-size: 15px;
    font-family: 'Futura Light Bk', sans-serif;
    font-weight: 400;
    margin: 10px;
  }
`;

export const StartButton = styled.button`
    background: #0C2340;
    font-family: 'Edo SZ', sans-serif;
    font-size: 80px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 10px 60px;
    margin: 20px;
    cursor: pointer;
    transition: background 250ms ease-in-out;
    width: 100%auto;
    &:hover {
      background: #7AC142;
    }
    &:active {
      transform: scale(0.98); 
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); 
    }
`;

export const PlayerImage = styled.img`
  object-fit: contain;
  width: 600px;
  /* height: 100%; */
  align-self: center;
`;

export const Squares = styled.div`
  background-image: url('${squares}');
  background-size: contain;
  height: 800px;
  width: 650px;
  background-repeat: no-repeat;
  position: absolute;
  top: 50px;
  z-index: -3;
  margin: 0;
`;


export const Brush = styled.div`
  background-image: url('${brushStroke}');
  background-size: contain;
  height: 900px;
  width: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: -100px;
  left: 0;
  z-index: -1;
`;