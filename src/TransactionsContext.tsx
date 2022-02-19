import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface TransactionsProps {
  id: number,
  title: string,
  amount: number,
  category: string,
  createdAt: string
  transactionType: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>;

interface TransactionProviderData {
  transactions: TransactionsProps[],
  createTransaction: (transaction: TransactionInput) => void
};


export const TransactionsContext = createContext<TransactionProviderData>({} as TransactionProviderData);

export function TransactionsProvider({children} : TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransaction(response.data.transactions));
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    await api.post('transactions', transactionInput)
      .then((response) => {
        const { transaction } = response.data;
        setTransaction([
          ...transactions,
          {
            ...transaction,
            createdAt: new Date()
          }
        ])
      });

    }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
