const transactionsMock = [
  {
    id: 1,
    category: 'categoria',
    title: 'Sua compra aparece aqui',
    value: 1000000000,
  },
  {
    id: 2,
    category: 'categoria',
    title: 'Receba pagamentos',
    value: 2000000000,
  },
  {
    id: 3,
    category: 'categoria',
    title: 'Tarifa',
    value: -0.01,
  },
  {
    id: 4,
    category: 'categoria',
    title: 'Tarifa',
    value: -0.01,
  },
  {
    id: 5,
    category: 'categoria',
    title: 'Tarifa',
    value: -0.01,
  },
  {
    id: 6,
    category: 'categoria',
    title: 'Tarifa',
    value: -0.01,
  },
];

export class BankStatementService {
  constructor() {
    this.transactions = transactionsMock;
  }
  get() {
    return Promise.resolve(this.transactions);
  }

  delete(id) {
    const index = this.transactions.findIndex(item => item.id === id);
    const deleted = this.transactions.splice(index, 1);
    return Promise.resolve(deleted);
  }
}
