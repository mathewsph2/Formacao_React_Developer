import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  min-height: 110px;
  padding: 16px 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;

  span {
    color: #6c6f7d;
    font-size: 18px;
    font-weight: 500;
    min-height: 22px;
  }

  input {
    width: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-align: right;
  }
`;
