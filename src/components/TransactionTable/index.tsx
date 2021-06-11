import { Container } from './styles'

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">+ R$ 1.200,00</td>
            <td>Trabalho</td>
            <td>12/06/2021</td>
          </tr>

          <tr>
            <td>Supermercado</td>
            <td className="withdraw">- R$ 200,00</td>
            <td>Compras</td>
            <td>05/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
