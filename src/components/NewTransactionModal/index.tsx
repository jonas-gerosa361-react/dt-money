import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
  isModalOpen: boolean,
  handleCloseModal: () => void
}

export function NewTransactionModal({isModalOpen, handleCloseModal}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder='Title' />

        <input type="number" placeholder='Amount' />

        <input type="text" placeholder='Category' />

        <button type="submit">
          Create
        </button>
      </Container>
    </Modal>
  )
}
