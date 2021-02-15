let btn = document.querySelectorAll('.drum');
let audio;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let btnInnerHtml = this.innerHTML;
    keyClick(btnInnerHtml);
    btnAnimate(btnInnerHtml);
  });
}

document.addEventListener('keydown', function (event) {
  keyPressed(event.key);
  btnAnimate(event.key);
});

keyPressed = (key) => {
  key == 'w'? audio = new Audio('sounds/crash.mp3').play() :console.log() 
  key == 'a'? audio = new Audio('sounds/kick-bass.mp3').play() :console.log() 
  key == 's'? audio = new Audio('sounds/snare.mp3').play() :console.log() 
  key == 'd'? audio = new Audio('sounds/tom-1.mp3').play() :console.log() 
  key == 'j'? audio = new Audio('sounds/tom-2.mp3').play() :console.log() 
  key == 'k'? audio = new Audio('sounds/tom-3.mp3').play() :console.log() 
  key == 'l'? audio = new Audio('sounds/tom-4.mp3').play() :console.log() 
}

keyClick = (btnInnerHtml) => {
  btnInnerHtml =='w'? audio = new Audio('sounds/crash.mp3').play() :console.log()
  btnInnerHtml =='a'? audio = new Audio('sounds/kick-bass.mp3').play() :console.log() 
  btnInnerHtml =='s'? audio = new Audio('sounds/snare.mp3').play() :console.log() 
  btnInnerHtml =='d'? audio = new Audio('sounds/tom-1.mp3').play() :console.log() 
  btnInnerHtml =='j'? audio = new Audio('sounds/tom-2.mp3').play() :console.log() 
  btnInnerHtml =='k'? audio = new Audio('sounds/tom-3.mp3').play() :console.log() 
  btnInnerHtml =='l'? audio = new Audio('sounds/tom-4.mp3').play() :console.log() 
}

btnAnimate = (currentKey) => {
  let btnActive = document.querySelector('.' + currentKey);
  btnActive.classList.add('active');
  setTimeout( () => {
    btnActive.classList.remove('active');
  }, 100);
}