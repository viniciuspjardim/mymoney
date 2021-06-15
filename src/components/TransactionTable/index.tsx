import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles'

export function TransactionTable() {
  const { transactions } = useTransactions();

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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {Intl.DateTimeFormat('en-US').format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
