import styled from 'styled-components';
import { motion } from 'framer-motion';
import brushStroke from '../../../images/brush-stroke.svg';

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
    @media screen and (max-width: 1024px) {
      flex-direction: row-reverse;
      height: 900px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  width: 100%;

  &:nth-of-type(1) {
    flex-grow: 2;
    align-items: center;
    height: 700px;
    @media screen and (max-width: 1024px) {
      height: 600px;
    }
    @media screen and (max-width: 768px) {
      height: 100%;
    }
  }
  &:nth-of-type(2) {
    flex-grow: 1;
    align-items: flex-end;
    @media screen and (max-width: 500px) {
      
    }
  }

  h1 {
    font-size: 60px;
    font-family: 'Edo SZ', sans-serif;
    font-weight: 400;
    text-align: center;
    padding: 10px;
    margin: 30px 10px;
    color: #000;
    display: none;
    @media screen and (max-width: 500px) {
      display: flex;
    }
    @media screen and (max-width: 425px) {
      display: flex;
      font-size: 45px;
    }
  }

  h3 {
    font-size: 26px;
    font-family: 'Futura Light Bk', sans-serif;
    font-weight: 400;
    text-align: center;
    max-width: 650px;
    margin: 20px;
    

    @media screen and (max-width: 1400px) {
      max-width: 400px;
      margin: 10px;
      font-size: 22px;
    }
    @media screen and (max-width: 1200px) {
      align-self: flex-start;
      text-align: left;
      padding: 0 10px;
    }
    @media screen and (max-width: 1024px) {
      align-self: flex-end;
      text-align: right;
    }
    @media screen and (max-width: 768px) {
      align-self: center;
      text-align: center;
    }
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
    font-size: 60px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 10px 40px;
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

export const PlayerImage = styled(motion.img)`
  object-fit: contain;
  width: 600px;
  /* height: 100%; */
  align-self: center;
  @media screen and (max-width: 1200px) {
    width: 500px;
  }
  @media screen and (max-width: 1024px) {
    width: 450px;
  }
  @media screen and (max-width: 500px) {
    width: 75vw;
  }
`;

export const SquareGreen = styled(motion.div)`
  height: 650px;
  width: 650px;
  background-color: var(--timberGreen);
  background-repeat: no-repeat;
  border-radius: 5px;
  position: absolute;
  top: 50px;
  right: 100px;
  z-index: -3;
  margin: 0;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1200px) {
    height: 600px;
    width: 600px;
    right: 50px;
  }
  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 400px;
    bottom: 0;
    top: 400px;
    left: 60px;
    transform: rotate(180deg);
  }
  @media screen and (max-width: 768px) {
    bottom: 0;
    top: 800px;
  }
  @media screen and (max-width: 500px) {
    top: 550px;
    height: 70vw;
    width: 70vw;
  }
`;

export const SquareNavy = styled(motion.div)`
  height: 650px;
  width: 650px;
  background-color: var(--timberNavy);
  background-repeat: no-repeat;
  border-radius: 5px;
  position: absolute;
  top: -50px;
  z-index: -4;
  margin: 0;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1200px) {
    height: 600px;
    width: 600px;
  }
  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 400px;
    bottom: 0;
    top: 450px;
    left: -5px;
  }
  @media screen and (max-width: 768px) {
    bottom: 0;
    top: 850px;
  }
  @media screen and (max-width: 500px) {
    top: 600px;
    height: 70vw;
    width: 70vw;
  }
`;


export const Brush = styled(motion.div)`
  background-image: url('${brushStroke}');
  background-size: contain;
  height: 850px;
  width: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: -150px;
  left: 0;
  z-index: -1;
  @media screen and (max-width: 1024px) {
    top: -150px;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    height: 500px;
    background-size: cover;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }

`;