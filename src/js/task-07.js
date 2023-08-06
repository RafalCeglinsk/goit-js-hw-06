const spanText = document.querySelector('#text');
const fontSizeControl = document.querySelector('#font-size-control');

const initialFontSize = fontSizeControl.value + 'px';
  spanText.style.fontSize = initialFontSize;


fontSizeControl.addEventListener('input', () =>
 {  const fontSize = fontSizeControl.value + 'px';
    spanText.style.fontSize = fontSize;
 });

 