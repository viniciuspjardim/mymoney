import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeButtonImg from '../../assets/close-button.svg';
import incomeImg from '../../assets/money-in.svg';
import expenditureImg from '../../assets/money-out.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');

  const { createTransaction } = useTransactions();

  async function handleOnCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({ title, value, category, type });
    
    setTitle('');
    setValue(0);
    setCategory('');
    setType('income');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeButtonImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleOnCreateNewTransaction}>
        <h2>New transaction</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('income'); }}
            isActive={type === 'income'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('expenditure'); }}
            isActive={type === 'expenditure'}
            activeColor='red'
          >
            <img src={expenditureImg} alt="Expenditure" />
            <span>Expenditure</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Save
        </button>
      </Container>
    </Modal>
  );
}
