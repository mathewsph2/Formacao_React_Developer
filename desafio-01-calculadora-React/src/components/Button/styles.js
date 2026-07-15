import styled, { css } from 'styled-components';

const variants = {
  default: css`
    background-color: #2e2f38;
    color: #fff;
  `,
  operator: css`
    background-color: #3b4664;
    color: #82a7ff;
  `,
  clear: css`
    background-color: #3d2c33;
    color: #ff8a8a;
  `,
  equals: css`
    background: linear-gradient(135deg, #4b5efc 0%, #7b5cff 100%);
    color: #fff;
  `,
};

export const ButtonContainer = styled.button`
  height: 64px;
  border: 0;
  border-radius: 18px;
  font-size: 24px;
  font-weight: 600;
  flex: 1;
  cursor: pointer;
  transition: transform 0.08s ease, filter 0.15s ease;

  ${({ $variant }) => variants[$variant] || variants.default}

  &:hover {
    filter: brightness(1.25);
  }

  &:active {
    transform: scale(0.95);
  }
`;
