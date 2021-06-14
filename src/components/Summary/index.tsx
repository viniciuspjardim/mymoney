import { Container } from './styles'
import incomeImg from '../../assets/money-in.svg'
import expenditureImg from '../../assets/money-out.svg'
import totalImg from '../../assets/money-total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>$ 1,200.00</strong>
      </div>

      <div>
        <header>
          <p>Expenditure</p>
          <img src={expenditureImg} alt="Expenditure" />
        </header>
        <strong>$ 200.00</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$ 1,000.00</strong>
      </div>
    </Container>
  );
}
