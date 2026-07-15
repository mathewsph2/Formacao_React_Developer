import { InputContainer } from './styles';

const Input = ({ value, expression }) => {
  return (
    <InputContainer>
      <span>{expression}</span>
      <input type="text" value={value} readOnly />
    </InputContainer>
  );
};

export default Input;
