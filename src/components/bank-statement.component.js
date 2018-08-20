import { BankStatementService } from '../services/bank-statement.service';
import { formatBRLWithSignal } from '../utils/formatters';

export class BankStatementComponent {
  constructor(id) {
    this.list = document.getElementById(id);
    this.service = new BankStatementService();
    if (!this.list) {
      throw `Failed to instantiate BankStatementComponent. Could not find element with id ${id}.`;
    }
    this.init();
  }

  init() {
    this.refreshList();
  }

  refreshList() {
    this.list.innerHTML = '';
    this.service.get().then(transactions => this.updateList(transactions));
  }

  bindTemplate(transaction, template) {
    const item = document.importNode(template.content, true);
    item.querySelector('li').id = `item-${transaction.id}`;
    item.querySelector('.title').innerHTML = transaction.title;
    const valueElement = item.querySelector('.value');
    if (transaction.value > 0) {
      valueElement.classList.add('positive');
    }
    valueElement.innerHTML = formatBRLWithSignal(transaction.value);
    item.querySelector('.category-name').innerHTML = transaction.category;
    item
      .querySelector('button')
      .addEventListener('click', () => this.deleteTransaction(transaction));
    return item;
  }

  deleteTransaction({ id }) {
    this.service.delete(id).then(() => {
      const removedTransactionElement = this.list.querySelector(`#item-${id}`);
      this.list.removeChild(removedTransactionElement);
    });
  }

  updateList(transactions = []) {
    const template = document.getElementById('bank-statement-item-template');
    transactions.forEach(transaction => {
      const item = this.bindTemplate(transaction, template);
      this.list.appendChild(item);
    });
  }
}
