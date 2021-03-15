import styled from 'styled-components';

export const QuestionHeader = styled.h2`
  color: #ffffff;
  font-family: 'Futura Medium Bk', sans-serif;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  line-height: 42px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const QuestionText = styled.h3`
  color: #ffffff;
  font-family: 'Futura Medium Bk', sans-serif;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  line-height: 42px;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
`;