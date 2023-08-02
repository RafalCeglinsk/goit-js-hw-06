const spanText = document.querySelector('#text');
const fontSizeControl = document.querySelector('#font-size-control');

fontSizeControl.addEventListener('input', () =>
 {  const fontSize = fontSizeControl.value + 'px';
    spanText.style.fontSize = fontSize;
 });