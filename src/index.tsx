import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model, Registry } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website development',
          amount: 7200.80,
          category: 'Gig',
          createdAt: new Date(),
          transactionType: 'deposit'
        },
        {
          id: 2,
          title: 'Apartment rent',
          amount: 1200.98,
          category: 'Housing',
          createdAt: new Date('2022-02-10'),
          transactionType: 'withdraw'
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
