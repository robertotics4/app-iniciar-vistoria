import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const { pushImage, sources } = useImages();
  const navigate = useNavigate();

  console.log(sources);

  const handleConfirmButton = useCallback(() => {
    pushImage(source);

    setSource('');

    if (sources.length === 1) {
      navigate('/secondCapture');
    } else if (sources.length === 2) {
      navigate('/thirdCapture');
    }
  }, [pushImage, source, navigate, sources.length, setSource]);

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
