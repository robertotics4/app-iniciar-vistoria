import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #000;

  img {
    margin: auto;
    overflow: auto;
    right: 0;
    top: 0;
    -o-object-fit: contain;
    object-fit: contain;

    min-width: 100%;
    min-height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;

  width: 100%;
  bottom: 0;
  padding: 16px;

  background-color: rgba(0, 0, 0, 0.7);

  h2 {
    color: white;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
`;

export const RepeatButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: var(--errors);
  border: none;
  padding: 16px 48px;
  border-radius: 24px;
  height: 48px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  transition: filter 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: var(--success);
  border: none;
  padding: 16px 48px;
  border-radius: 24px;
  height: 48px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 16px;
  transition: filter 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
