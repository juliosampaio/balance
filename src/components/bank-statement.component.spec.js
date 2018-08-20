import { BankStatementComponent } from './bank-statement.component';

const template = `
<template id="bank-statement-item-template">
<li id="">
  <div class="details">
    <div class="category">
      <span class="bg-icon_category hide-for-small-only"></span>
      <span class="category-name hide-for-medium"></span>
    </div>
    <div class="transaction">
      <div class="title"></div>
      <div class="value"></div>
    </div>
  </div>
  <div class="actions">
    <button type="button" class="bg-icon_delete"></button>
  </div>
</li>
</template>
<ul id="bank-statement" class="list"></ul>
`;

describe('Bank Statement Component', () => {
  beforeEach(() => {
    document.body.innerHTML = template;
  });
  it('should throw error when the wrapper ID is not found', () => {
    expect(() => new BankStatementComponent()).toThrow(
      new Error(
        'Failed to instantiate BankStatementComponent. Could not find element with id undefined.',
      ),
    );
  });
  it('should add transactions to the list', done => {
    const instance = new BankStatementComponent('bank-statement');
    const list = instance.list;
    setTimeout(() => {
      expect(list.children.length).toBe(6);
      done();
    });
  });
  it('should delete transactions from the list', done => {
    const instance = new BankStatementComponent('bank-statement');
    const list = instance.list;
    setTimeout(() => {
      list.children[0].querySelector('button').click();
      setTimeout(() => {
        expect(list.children.length).toBe(5);
        done();
      });
    });
  });
});
