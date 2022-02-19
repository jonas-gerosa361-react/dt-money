import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.transactionType === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
      return acc;
    }

    acc.withdraws += transaction.amount;
    acc.total -= transaction.amount;
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>
          - {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Incomes" />
        </header>
        <strong>
          {summary.total > 0 ? '+' : '-'}
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
