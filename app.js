let textareaEl = document.querySelector('#text-area');
let charcountEl = document.querySelector('#char-count');

textareaEl.addEventListener('keyup', function(){
  let lengthOftext = textareaEl.value.length;
  charcountEl.innerText = lengthOftext;
});