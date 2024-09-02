export default class buttonProductLogic {
  constructor() {
    this.buttons = document.querySelectorAll('.produto-button');
    const activeClass = 'active';
  }

  increment() {}

  decrement() {}

  remove() {}

  ativate() {
    this.buttons.forEach((element) => {
      element.addEventListener('click', function test() {
        element.parentNode.classList.add('active');
        const qte = element.querySelector('.quantidade');
        qte.innerText = +qte.innerText + 1;
        console.log('teste ocorreu');
      });
    });
  }

  init() {
    console.log(this.buttons);
  }
}
