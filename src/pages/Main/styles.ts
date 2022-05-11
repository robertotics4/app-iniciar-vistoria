import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  border: 1px solid;

  padding: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
  }

  h5 {
    margin-top: 36px;
    text-align: center;
    font-size: 16px;
  }

  p {
    margin-top: 16px;
    text-align: center;
    font-size: 16px;
  }

  button {
    background: var(--titles);
    border: none;
    margin-top: 48px;
    padding: 16px 36px;
    border-radius: 24px;
    height: 48px;
    background-color: var(--text);
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
