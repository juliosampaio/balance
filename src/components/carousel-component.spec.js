import { CarouselComponent } from './carousel.component';

const template = `
<article id="balance-carousel" class="carousel">
<div class="slides">
  <section id="left" class="slide previous"></section>
  <section id="center" class="slide active">
    <ul id="bank-statement" class="list"></ul>
  </section>
  <section id="right" class="slide next"></section>
</div>
<div class="controls">
</div>
</article>
`;

describe('Carousel component', () => {
  beforeEach(() => {
    document.body.innerHTML = template;
  });
  it('should throw error when the wrapper ID is not found', () => {
    expect(() => new CarouselComponent()).toThrow(
      new Error(
        'Failed to instantiate CarouselComponent. Could not find element with id undefined.',
      ),
    );
  });
  it('should add a control for reach slide', () => {
    const instance = new CarouselComponent('balance-carousel');
    expect(document.querySelectorAll('.control').length).toBe(3);
  });
  it('should activate the next slide using control', () => {
    const instance = new CarouselComponent('balance-carousel');
    const nextControl = document.querySelector('.controls').children[2];
    nextControl.click();
    expect(document.getElementById('right').classList.contains('active')).toBeTruthy();
  });
  it('should activate the previous slide using control', () => {
    const instance = new CarouselComponent('balance-carousel');
    const nextControl = document.querySelector('.controls').children[0];
    nextControl.click();
    expect(document.getElementById('left').classList.contains('active')).toBeTruthy();
  });
  it('should move to next slide', () => {
    const instance = new CarouselComponent('balance-carousel');
    instance.moveTo('next');
    expect(document.getElementById('right').classList.contains('active')).toBeTruthy();
  });
  it('should move to previous slide', () => {
    const instance = new CarouselComponent('balance-carousel');
    instance.moveTo('prev');
    expect(document.getElementById('left').classList.contains('active')).toBeTruthy();
  });
  it('should add hideLeft to all previous elements', () => {
    const mockTemplate = `
      <article id="balance-carousel" class="carousel">
      <div class="slides">
        <section id="left4" class="slide"></section>
        <section id="left3" class="slide"></section>
        <section id="left2" class="slide predecessor"></section>
        <section id="left" class="slide previous"></section>
        <section id="center" class="slide active">
          <ul id="bank-statement" class="list"></ul>
        </section>
        <section id="right" class="slide next"></section>
      </div>
      <div class="controls">
      </div>
      </article>
      `;
    document.body.innerHTML = mockTemplate;
    const instance = new CarouselComponent('balance-carousel');
    instance.moveTo('prev');
    expect(document.getElementById('left4').classList.contains('hideLeft')).toBeTruthy();
  });
});
