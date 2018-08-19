export class Carousel {
  constructor(id) {
    this.wrapper = document.getElementById(id);
    this.init();
  }

  init() {}

  currentState() {
    const active = this.wrapper.querySelector('.slide.active');
    const next = active.nextElementSibling;
    const successor = next && next.nextElementSibling;
    const previous = active.previousElementSibling;
    const predecessor = previous && previous.previousElementSibling;
    const state = { predecessor, previous, active, next, successor };
    return state;
  }

  next() {
    const { predecessor, previous, active, next, successor } = this.currentState();
    if (!active.nextElementSibling) {
      return;
    }
    predecessor && predecessor.classList.replace('predecessor', 'hideLeft');
    previous && previous.classList.replace('previous', 'predecessor');
    active.classList.replace('active', 'previous');
    next && next.classList.replace('next', 'active');
    successor && successor.classList.replace('successor', 'next');
    successor &&
      successor.nextElementSibling &&
      successor.nextElementSibling.classList.add('successor');
  }

  prev() {
    const { predecessor, previous, active, next, successor } = this.currentState();
    if (!active.previousElementSibling) {
      return;
    }
    predecessor &&
      predecessor.previousElementSibling &&
      predecessor.previousElementSibling.classList.replace('hideLeft', 'predecessor');
    predecessor && predecessor.classList.replace('predecessor', 'previous');
    previous && previous.classList.replace('previous', 'active');
    active.classList.replace('active', 'next');
    next && next.classList.replace('next', 'successor');
    successor && successor.classList.remove('successor');
  }
}
