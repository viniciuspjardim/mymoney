import { Container } from './styles'
import moneyInImg from '../../assets/money-in.svg'
import moneyOutImg from '../../assets/money-out.svg'
import moneyTotalImg from '../../assets/money-total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={moneyInImg} alt="Entradas" />
        </header>
        <strong>R$ 1200,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={moneyOutImg} alt="Saídas" />
        </header>
        <strong>R$ 200,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={moneyTotalImg} alt="Total" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}
