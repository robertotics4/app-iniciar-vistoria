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

  return (
    <Container>
      <img src={source} alt="Preview" />

      <ActionButtons>
        <RepeatButton type="button" onClick={() => setSource('')}>
          Não
        </RepeatButton>

        <ConfirmButton onClick={() => pushImage(source)} type="button">
          Sim
        </ConfirmButton>
      </ActionButtons>
    </Container>
  );
}

export { ImagePreview };
