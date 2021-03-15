
import styled from 'styled-components';

export const QuizFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
	margin: 0 auto;
  padding: 60px;
	border-radius: 5px;
	background-color: var(--timberBlue);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const QuizHeader = styled.div`
  background-color: var(--timberNavy);
  width: 500px;
  padding: 30px 20px;
  z-index: 2;
  /* margin-top: -150px; */
  margin-bottom: 60px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h2 {
    color: #ffffff;
    font-family: 'Futura Medium Bk', sans-serif;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    line-height: 42px;
    margin-bottom: 30px;
  }
  h3 {
    color: #ffffff;
    font-family: 'Futura Medium Bk', sans-serif;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    line-height: 42px;
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
  }
`;