export default class createButton {
  constructor() {}

  load() {
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
    const buttonDecrementImg = document.createElement('img');
    buttonDecrementImg.setAttribute(
      'src',
      './assets/images/icon-decrement-quantity.svg',
    );
    buttonDecrementDiv.appendChild(buttonDecrementImg);
    const buttonActiveSpan = document.createElement('span');
    buttonActiveSpan.innerText = '1';
    buttonActiveSpan.classList.add('quantidade');
    const buttonincrementDiv = document.createElement('div');
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
