
import styled from 'styled-components';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
	margin: 20px auto;
  padding: 40px 60px;
	border-radius: 5px;
	background-color: var(--timberBlue);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
  @media screen and (max-width: 1200px) {
    padding: 10px 20px;
  }
  @media screen and (max-width: 850px) {
    margin: 0 auto;
    padding: 0;
  }
`;

export const QuizHeader = styled.div`
  background-color: var(--timberNavy);
  max-width: 500px;
  padding: 30px 20px;
  z-index: 2;
  /* margin-top: -150px; */
  margin-bottom: 60px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media screen and (max-width: 1024px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 850px) {
    margin-bottom: 10px;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  button {
    cursor: pointer;
    margin: 15px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: var(--timberSilver);
    color: #ffffff;
    font-family: 'Futura Medium Bk', sans-serif;
    font-size: 30px;
    width: 400px;
    text-align: left;
    @media screen and (max-width: 1024px) {
      font-size: 26px;
    }
    @media screen and (max-width: 850px) {
      margin: 10px;
      /* width: 80vw; */
    }
    @media screen and (max-width: 425px) {
      width: 90vw;
      font-size: 20px;
    }
  }
`;