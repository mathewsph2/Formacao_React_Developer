import { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';

import logo from './assets/logo-react-developer.png';
import { Container, Title, Wrapper, Brand, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  const expression =
    firstNumber !== '0' && operation !== ''
      ? `${firstNumber} ${operation}`
      : '';

  return (
    <Container>
      <Wrapper>
        <Brand>
          <Title>Formação React Developer</Title>
          <img src={logo} alt="Brasão da formação React Developer" />
          <p>Desafio de Projeto: Criando uma calculadora com react</p>
        </Brand>
        <Content>
          <Input value={currentNumber} expression={expression} />
          <Row>
            <Button label="C" variant="clear" onClick={handleOnClear} />
            <Button label="x" variant="operator" onClick={handleMultiplyNumbers} />
            <Button label="/" variant="operator" onClick={handleDivideNumbers} />
            <Button label="-" variant="operator" onClick={handleMinusNumbers} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="+" variant="operator" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="." onClick={() => handleAddNumber('.')} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="=" variant="equals" onClick={handleEquals} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')} />
          </Row>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default App;
