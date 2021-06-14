import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles'

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>Website development</td>
            <td className="income">+ R$ 1,200.00</td>
            <td>Freelance</td>
            <td>06/12/2021</td>
          </tr>

          <tr>
            <td>Groceries</td>
            <td className="expenditure">- R$ 200.00</td>
            <td>Shopping</td>
            <td>06/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
