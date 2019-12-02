console.log('I work');

let aNodeList = document.querySelectorAll('.square')
let a = Array.from(aNodeList)
function getWinner(){
  if ((a[0].innerHTML === a[1].innerHTML && a[1].innerHTML === a[2].innerHTML)||(a[0].innerHTML === a[3].innerHTML && a[3].innerHTML === a[6].innerHTML)||(a[1].innerHTML === a[4].innerHTML && a[4].innerHTML === a[7].innerHTML)||(a[2].innerHTML === a[5].innerHTML && a[5].innerHTML === a[8].innerHTML)||(a[3].innerHTML === a[4].innerHTML && a[4].innerHTML === a[5].innerHTML)||(a[6].innerHTML === a[7].innerHTML && a[7].innerHTML === a[8].innerHTML)||(a[0].innerHTML === a[4].innerHTML && a[4].innerHTML === a[8].innerHTML)||(a[2].innerHTML === a[4].innerHTML && a[4].innerHTML === a[6].innerHTML)) {
    alert(document.querySelector('h2').innerHTML + ' wins!!')

  } else {
    console.log('keep playing')
  }
}

function playGame(){
  for (let i = 0; i < 9; i++) {
    a[i].addEventListener('click', function (evt){
      evt.preventDefault();
      if (document.querySelector('h2').innerHTML === 'Player 2') {
        evt.target.style.backgroundColor = 'red';
        evt.target.style.pointerEvents = 'none';
        evt.target.innerHTML = 'x';
        getWinner()
        document.querySelector('h2').innerHTML = 'Player 1'
        document.querySelector('p').innerHTML = 'Blue'
        } else if (document.querySelector('h2').innerHTML === 'Player 1') {
          evt.target.style.backgroundColor = 'blue';
          evt.target.style.pointerEvents = 'none';
          evt.target.innerHTML = 'o';
          getWinner()
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
