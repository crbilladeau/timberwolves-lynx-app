import styled from 'styled-components';

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 600px;
  height: 300px;
  border-radius: 5px;
  background-color: ${(props) =>
      props.result === true
        ? '#7AC142'
        : props.result === false ? '#CA0201' : null};
  
  h3 {
    color: #ffffff;
    font-family: 'Futura Medium Bk', sans-serif;
    font-size: 50px;
  }
`;

export const NextQuestion = styled.button`
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