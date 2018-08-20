import { CarouselComponent } from './components/carousel.component';
import { BankStatementComponent } from './components/bank-statement.component';

window.onload = () => {
  const c = new CarouselComponent('balance-carousel');
  const b = new BankStatementComponent('bank-statement');
};
