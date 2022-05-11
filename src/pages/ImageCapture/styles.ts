import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 64px;
  width: 100%;
  border-bottom: 1px solid var(--placeholders);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 36px 80px 36px;
  padding: 16px;

  border: 2px dashed var(--placeholders);
  border-radius: 10px;

  img {
    width: 80%;
  }

  h2 {
    text-align: center;
  }
`;

export const CaptureButton = styled.button`
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
  transition: filter 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
