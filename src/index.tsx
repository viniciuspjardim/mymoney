import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  timing: 500,
  
  models: {
    transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website development',
          value: 1200,
          type: 'income',
          category: 'Freelance',
          createdAt: new Date('2021-05-28 11:00:00')
        },
        {
          id: 2,
          title: 'Groceries',
          value: 200,
          type: 'expenditure',
          category: 'Shopping',
          createdAt: new Date('2021-05-25 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
