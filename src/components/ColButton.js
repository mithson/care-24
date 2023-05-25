import React, { useState } from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const PayButton = styled.button`
margin: 1rem auto;  
display: flex;
  font-weight:545;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: white;
  border: 1px solid blue ;
  border-radius: 3px;
  width: 20rem;
  font-size: 16px;
  color: black;
  cursor: pointer;

  &:hover  {
    background-color: blue;
    color: white;
  }
`;


const ButtonText = styled.span`
  margin-right: auto;
`;

const Caps = styled.div`
font-weight: 100;
color: grey;
`;

const ButtonIcon = styled(FiArrowRight)`
  margin-left: 10px;
  font-size: 20px;
  &:hover {
    color: white;
  }
`;


const Container = styled.div`
display: flex;
align-content: center;
justify-content: center;
margin: 2rem auto;
max-width: 40rem;
// background-color: red;

@media (max-width: 768px) {
    // background-color: red;
    margin: 2rem auto;
    max-width: 40rem;
    // background-color: lightblue;
  }
`;

const Column = styled.div`
  margin: 0rem 1rem;
  min-width: 4rem;
  flex: 1;
  padding-bottom: 1rem;
  border-radius: 3px;
  border: 1px solid ${({ highlighted }) => (highlighted ? 'blue' : 'white')};
  background-color: ${({ highlighted }) => (highlighted ? '#e8f6ff' : 'white')};
  color: ${({ highlighted }) => (highlighted ? 'black' : 'grey')};
  @media (max-width: 768px) {
    margin: 0rem 0.6rem;
    min-width: 4rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  @media (max-width: 768px) {
    margin: 0rem ;
    padding: 0rem;
  }
`;

const Button = styled.button`
  min-width: 20px;
  position: relative;
  font-weight: 700;
  padding: 1rem 1.5rem;
  cursor: pointer;
  margin: 0 0.5rem;
  border: 1px solid ${({ highlighted }) => (highlighted ? 'blue' : 'black')} ;
  border-radius: 3px;
  background-color: ${({ highlighted }) => (highlighted ? '#e8f6ff' : 'white')};
  color: ${({ highlighted }) => (highlighted ? 'blue' : 'black')};
  &::after {
    content: ${({ highlighted }) => (highlighted ? '"\u2714"' : '')}; /* Unicode for the tick mark */
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border: 1px solid blue; /* Add border styles */
    box-sizing: content-box;
    border-radius: 50%;
    background-color: white;
    color: e8f6ff; // blue tick color
    text-align: center;
    font-weight: bold;
    line-height: 20px;
  }
  media (max-width: 768px){
    margin: 0rem;
    padding: 1rem 2rem;
  }
`;



const DescContent = styled.div`
// background-color: red;
white-space:nowrap;
padding-left: 1rem;
padding-right: 0.5rem;
flex-direction: column;
position: relative;
top: 2.3rem;
@media (max-width: 768px) {
    // background-color: red;
    position: relative;
    padding-left: 0.5rem;
    padding-right: 1rem;
}
`;

const AmountDesc = styled.div`white-space: nowrap;`;

const BgDark = styled.div`
  white-space:nowrap;
  padding: 0.5rem;
  ${({ highlighted }) => (highlighted ? "font-weight:500;" : '')}
  ${({ highlighted }) => (highlighted ? "color: white;" : '')}
  ${({ highlighted }) => (highlighted ? 'background-color: blue;' : '')}
`;

const Total = styled.div`
${({ highlighted }) => (highlighted ? "font-weight:700;" : '')}
`;


const Payment = () => {
  const [highlightedColumn, setHighlightedColumn] = useState(null);

  const handleButtonClick = (columnIndex) => {
    setHighlightedColumn(columnIndex);
  };

  return (
    <div>

      <Container>

        <div className="column">
          <DescContent>
            <p>Per Day Price</p>
            <p>Total Savings</p>
            <b>Total Amount</b>
          </DescContent>
        </div>

        <Column highlighted={highlightedColumn === 1}>
          <AmountDesc>
            <BgDark highlighted={highlightedColumn === 1}>7 Days</BgDark>
            <p>₹ 7000</p>
            <p>₹ 700</p>
            <Total highlighted={highlightedColumn === 1}>₹ 6300</Total> </AmountDesc>               </Column>
        <Column highlighted={highlightedColumn === 2}>
          <AmountDesc>
          <BgDark highlighted={highlightedColumn === 2}>15 Days</BgDark>
          <p>₹ 15000</p>
          <p>₹ 2250</p>
          <Total highlighted={highlightedColumn === 2}>₹ 12750</Total></AmountDesc>
        </Column>
        <Column highlighted={highlightedColumn === 3}><AmountDesc>
          <BgDark highlighted={highlightedColumn === 3}>30 Days</BgDark>
          <p>₹ 30000</p>
          <p>₹ 6000</p>
          <Total highlighted={highlightedColumn === 3}>₹ 24000</Total></AmountDesc>
        </Column>
      </Container>

      <ButtonGroup>
        <Button
          highlighted={highlightedColumn === 1}
          onClick={() => handleButtonClick(1)}
        >
          7 Days
        </Button>
        <Button
          highlighted={highlightedColumn === 2}
          onClick={() => handleButtonClick(2)}
        >
          15 Days
        </Button>
        <Button
          highlighted={highlightedColumn === 3}
          onClick={() => handleButtonClick(3)}
        >
          30 Days
        </Button>
      </ButtonGroup>
      <br />
      <PayButton>
        <ButtonText>Pay with UPI</ButtonText>
        <ButtonIcon />
      </PayButton>
      <p>OR</p>
      <PayButton>
        <ButtonText>Pay with other options</ButtonText>
        <ButtonIcon />
      </PayButton>
      <Caps>* Terms and Conditions Applied</Caps>
      <br />
      <br />
    </div>
  );
};

export default Payment;
