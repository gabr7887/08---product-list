export default class createProductButton {
  constructor() {}

  load(quantidade) {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('produto-button');
    const buttonInactive = document.createElement('div');
    buttonInactive.classList.add('button-inactive');
    const buttoninactiveImg = document.createElement('img');
    buttoninactiveImg.setAttribute(
      'src',
      './assets/images/icon-add-to-cart.svg',
    );
    const buttoninactiveSpan = document.createElement('span');
    buttoninactiveSpan.innerText = 'Add to Cart';
    const buttonActive = document.createElement('div');
    buttonActive.classList.add('button-active');
    const buttonDecrementDiv = document.createElement('div');
    buttonDecrementDiv.classList.add('buttonDecrement');
    const buttonDecrementImg = document.createElement('img');
    buttonDecrementImg.setAttribute(
      'src',
      './assets/images/icon-decrement-quantity.svg',
    );
    buttonDecrementDiv.appendChild(buttonDecrementImg);
    const buttonActiveSpan = document.createElement('span');
    buttonActiveSpan.innerText = `${quantidade}`;
    buttonActiveSpan.classList.add('quantidade');
    const buttonincrementDiv = document.createElement('div');
    buttonincrementDiv.classList.add('buttonIncrement');
    const buttonincrementImg = document.createElement('img');
    buttonincrementImg.setAttribute(
      'src',
      './assets/images/icon-increment-quantity.svg',
    );
    buttonincrementDiv.appendChild(buttonincrementImg);

    buttonInactive.appendChild(buttoninactiveImg);
    buttonInactive.appendChild(buttoninactiveSpan);

    buttonActive.appendChild(buttonDecrementDiv);
    buttonActive.appendChild(buttonActiveSpan);
    buttonActive.appendChild(buttonincrementDiv);

    buttonContainer.appendChild(buttonInactive);
    buttonContainer.appendChild(buttonActive);
    return buttonContainer;
  }
}
