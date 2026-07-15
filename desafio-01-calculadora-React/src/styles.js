import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 24px;
  background: radial-gradient(circle at 20% 20%, #2b3a55 0%, #17181a 60%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0 4px 24px rgba(75, 94, 252, 0.45);
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
`;

export const Brand = styled.aside`
  max-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  img {
    width: 220px;
    max-width: 100%;
    filter: drop-shadow(0 12px 32px rgba(75, 94, 252, 0.35));
  }

  p {
    color: #aab1c5;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
  }
`;

export const Content = styled.div`
  width: 360px;
  padding: 24px;
  background-color: #1f2025;
  border-radius: 28px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
