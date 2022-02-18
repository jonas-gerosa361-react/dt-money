import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionCategoryContainer } from './styles';

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
      <button
        type="button"
        onClick={handleCloseModal}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder='Title' />

        <input type="number" placeholder='Amount' />

        <TransactionCategoryContainer>
          <button
            type='button'
          >
            <img src={incomeImg} alt="Income" />
            <span>
              Income
            </span>
          </button>

          <button
            type='button'
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>
              Outcome
            </span>
          </button>
        </TransactionCategoryContainer>

        <input type="text" placeholder='Category' />

        <button type="submit">
          Create
        </button>
      </Container>
    </Modal>
  )
}
