console.log('I work');

function playGame(){
  for (let i = 0; i < 9; i++) {
    let a = document.querySelectorAll('.square')
    a[i].addEventListener('click', function (evt){
      evt.preventDefault();
      if (document.querySelector('h2').innerHTML === 'Player 2') {
        evt.target.style.backgroundColor = 'red';
        evt.target.style.pointerEvents = 'none'
        document.querySelector('h2').innerHTML = 'Player 1'
        document.querySelector('p').innerHTML = 'Blue'
        } else if (document.querySelector('h2').innerHTML === 'Player 1') {
          evt.target.style.backgroundColor = 'blue';
          evt.target.style.pointerEvents = 'none'
          document.querySelector('h2').innerHTML = 'Player 2'
          document.querySelector('p').innerHTML = 'Red'
        }
      })
    }
  }
playGame();

/* Original if else statement
if (document.querySelector('h2').innerHTML === 'Player 2') {
  for (let i = 0; i < 9; i++) {
    let a = document.querySelectorAll('.square')
    a[i].addEventListener('click', function (evt){
      evt.preventDefault();
      evt.target.style.backgroundColor = 'red';
      document.querySelector('h2').innerHTML = 'Player 1'
    })
  }
} else if (document.querySelector('h2').innerHTML === 'Player 1') {
  for (let i = 0; i < 9; i++) {
    let a = document.querySelectorAll('.square')
    a[i].addEventListener('click', function (evt){
      evt.preventDefault();
      evt.target.style.backgroundColor = 'blue';
      document.querySelector('h2').innerHTML = 'Player 2'
    })
  }
}
*/
//Original click color change
/*for (let i = 0; i < 9; i++) {
  let a = document.querySelectorAll('.square')
  a[i].addEventListener('click', function clickSquare(evt){
    evt.preventDefault();
    evt.target.style.backgroundColor = 'red';
  })
}*/
