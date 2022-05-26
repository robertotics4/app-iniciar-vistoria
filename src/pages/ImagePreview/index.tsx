import { useCallback } from 'react';
import { useImages } from '../../hooks/images';
import {
  Container,
  ActionButtons,
  RepeatButton,
  ConfirmButton,
  Content,
} from './styles';

interface ImagePreviewProps {
  source: string;
  setSource: (value: string) => void;
}

function ImagePreview({ source, setSource }: ImagePreviewProps) {
  const { pushImage } = useImages();

  const handleConfirmButton = useCallback(async () => {
    pushImage(source);

    setSource('');
  }, [pushImage, setSource, source]);

  return (
    <Container>
      <img src={source} alt="Preview" />

      <Content>
        <h2>A foto ficou boa?</h2>
        <ActionButtons>
          <RepeatButton type="button" onClick={() => setSource('')}>
            Não
          </RepeatButton>

          <ConfirmButton onClick={handleConfirmButton} type="button">
            Sim
          </ConfirmButton>
        </ActionButtons>
      </Content>
    </Container>
  );
}

export { ImagePreview };
