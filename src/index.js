import { CarouselComponent } from './components/carousel.component';
import { BankStatementComponent } from './components/bank-statement.component';

window.onload = () => {
  new CarouselComponent('balance-carousel');
  new BankStatementComponent('bank-statement');
};
