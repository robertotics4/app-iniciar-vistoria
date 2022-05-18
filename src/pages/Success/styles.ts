import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  padding: 24px;

  background: var(--success);

  h1 {
    margin-top: 32px;
    font-size: 24px;
    text-align: center;
    color: var(--white);
  }

  p {
    margin-top: 16px;
    font-size: 20px;
    text-align: center;
    color: var(--white);
  }
`;
