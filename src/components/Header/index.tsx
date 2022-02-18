import { Container, Content } from "./styles";
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenModal: () => void
}

export function Header({onOpenModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money"/>
        <button
          onClick={onOpenModal}
          type="button">
          New Transaction
        </button>

      </Content>
    </Container>
  )
}
