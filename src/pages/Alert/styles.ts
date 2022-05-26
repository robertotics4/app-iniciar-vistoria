import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'success' | 'error';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  padding: 24px;

  ${props =>
    props.type === 'success'
      ? css`
          background: var(--success);
        `
      : css`
          background: var(--errors);
        `}

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
