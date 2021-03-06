import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Form, TransactionCategoryContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isModalOpen: boolean,
  handleCloseModal: () => void
}

export function NewTransactionModal({isModalOpen, handleCloseModal}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState('deposit');
  const { createTransaction } = useContext(TransactionsContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      transactionType
    });

    handleCloseModal();
    _clearModalInputs();
  }

  function _clearModalInputs() {
    setTitle('');
    setAmount(0);
    setTransactionType('deposit');
    setCategory('');
  }

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

      <Form onSubmit={handleFormSubmit}>
        <h2>New Transaction</h2>

        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder='Amount'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionCategoryContainer>
          <RadioBox
            type='button'
            onClick={() => setTransactionType('deposit')}
            isActive={transactionType === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Income" />
            <span>
              Income
            </span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setTransactionType('withdraw')}
            isActive={transactionType === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>
              Outcome
            </span>
          </RadioBox>
        </TransactionCategoryContainer>

        <input
          type="text"
          placeholder='Category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">
          Create
        </button>
      </Form>
    </Modal>
  )
}
