export class Carousel {
  constructor(id) {
    this.wrapper = document.getElementById(id);
    this.init();
  }

  init() {
    this.addControls();
  }

  addControls() {
    const controlsWrapper = this.wrapper.querySelector('.controls');
    this.wrapper.querySelectorAll('.slide').forEach(slide => {
      const control = document.createElement('a');
      control.href = `#${slide.id}`;
      control.classList.add('control');
      if (slide.classList.contains('active')) {
        control.classList.add('active');
      }
      control.addEventListener('click', () => {
        controlsWrapper.querySelectorAll('a').forEach(c => c.classList.remove('active'));
        control.classList.add('active');
        this.moveTo(slide);
      });
      controlsWrapper.appendChild(control);
    });
  }

  moveTo(slide) {
    const active = this.getActive(slide);
    const next = active && active.nextElementSibling;
    const previous = active && active.previousElementSibling;
    const predecessor = previous && previous.previousElementSibling;
    const successor = next && next.nextElementSibling;
    this.hideAllPredecessors(predecessor);
    this.removeStateClasses(predecessor).add('predecessor');
    this.removeStateClasses(previous).add('previous');
    this.removeStateClasses(active).add('active');
    this.removeStateClasses(next).add('next');
    this.removeStateClasses(successor).add('successor');
  }

  getActive(target) {
    switch (target) {
      case 'next':
        return this.wrapper.querySelector('.active').nextElementSibling;
      case 'prev':
        return this.wrapper.querySelector('.active').previousElementSibling;
      default:
        return target;
    }
  }

  hideAllPredecessors(predecessor) {
    if (!predecessor) return;
    let node = predecessor.previousElementSibling;
    while (node && node.nodeType === Node.ELEMENT_NODE) {
      node.classList.add('hideLeft');
      node = node.previousElementSibling;
    }
  }

  removeStateClasses(element) {
    if (!element) {
      return document.createElement('div').classList;
    }
    ['predecessor', 'previous', 'active', 'next', 'successor'].forEach(clazz =>
      element.classList.remove(clazz),
    );
    return element.classList;
  }
}
