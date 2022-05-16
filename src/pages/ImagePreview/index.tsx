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
  return (
    <Container>
      <img src={source} alt="Preview" />

      <ActionButtons>
        <RepeatButton type="button" onClick={() => setSource('')}>
          Não
        </RepeatButton>

        <ConfirmButton type="button">Sim</ConfirmButton>
      </ActionButtons>
    </Container>
  );
}

export { ImagePreview };
