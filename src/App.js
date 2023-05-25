import './App.css';
import Payment from './components/ColButton';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

const BackButton = styled.button`
  background: none;margin: 0rem; padding: 0rem;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 0.5rem;
`;


function App() {
  return (
    <div className="App">
      <div className="col">
        <BackButton>
          <FiArrowLeft size={30} />
        </BackButton>
        <center> <h1>Payment</h1></center>
      </div>
      <hr />
      <Payment />
    </div>
  );
}

export default App;
