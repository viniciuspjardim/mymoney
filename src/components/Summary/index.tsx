import { Container } from './styles'
import incomeImg from '../../assets/money-in.svg'
import expenditureImg from '../../assets/money-out.svg'
import totalImg from '../../assets/money-total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.value;
      acc.total += transaction.value;
    } else {
      acc.expenditure += transaction.value;
      acc.total -= transaction.value;
    }
    return acc;
  }, {
    income: 0,
    expenditure: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.income)}
        </strong>
      </div>

      <div>
        <header>
          <p>Expenditure</p>
          <img src={expenditureImg} alt="Expenditure" />
        </header>
        <strong>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.expenditure)}
        </strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
