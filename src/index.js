import { Carousel } from './components/carousel';

window.onload = () => {
  const c = new Carousel('balance-carousel');
  console.log(c);
  document.getElementById('prev').addEventListener('click', () => c.prev());
  document.getElementById('next').addEventListener('click', () => c.next());
};
