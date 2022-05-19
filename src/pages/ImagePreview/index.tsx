import { useCallback } from 'react';
import { useImages } from '../../hooks/images';
import {
  Container,
  ActionButtons,
  RepeatButton,
  ConfirmButton,
} from './styles';

interface ImagePreviewProps {
  source: string;
  setSource: (value: string) => void;
}

function ImagePreview({ source, setSource }: ImagePreviewProps) {
  const { pushImage } = useImages();

  const handleConfirmButton = useCallback(() => {
    pushImage(source);

    setSource('');
  }, [pushImage, source, setSource]);

  return (
    <Container>
      <img src={source} alt="Preview" />

      <ActionButtons>
        <RepeatButton type="button" onClick={() => setSource('')}>
          Não
        </RepeatButton>

        <ConfirmButton onClick={handleConfirmButton} type="button">
          Sim
        </ConfirmButton>
      </ActionButtons>
    </Container>
  );
}

export { ImagePreview };
