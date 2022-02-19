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

export const TransactionsContext = createContext<TransactionsProps[]>([]);

export function TransactionsProvider({children} : TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransaction(response.data.transactions));
  }, [])

  console.log(transactions);
  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
