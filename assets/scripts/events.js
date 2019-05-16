'use strict'
// const zero = $('.zero')
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

let moveArr = []
// const checkForWin = function () {
//   if ($('.zero').html() === $('one').html() && $('one').html() === $('.two').html()) {
//     alert('you win!')
//   }
// }
const fillContent = function () {
  if ($('h2').html() === ('X wins!') || ($('h2').html() === 'O wins!') || ($('h2').html() === 'Cats!')) {
    $('.borg').html('Resistance is futile!')
  } else if ($(event.target).html() !== '') {
    $('h2').html('Choose an empty Square!')
  } else if (moveArr.length % 2 !== 0) {
    $('h2').html('')
    $(event.target).html('O')
    moveArr.push('O')
  } else if (moveArr.length % 2 === 0) {
    $('h2').html('')
    $(event.target).html('X')
    moveArr.push('X')
  }
  const lines = {
    rowOne: [$('.zero').html(), $('.one').html(), $('.two').html()],
    rowTwo: [$('.three').html(), $('.four').html(), $('.five').html()],
    rowThree: [$('.six').html(), $('.seven').html(), $('.eight').html()],
    columnOne: [$('.zero').html(), $('.three').html(), $('.six').html()],
    columnTwo: [$('.one').html(), $('.four').html(), $('.seven').html()],
    columnThree: [$('.two').html(), $('.five').html(), $('.eight').html()],
    diagOne: [$('.zero').html(), $('.four').html(), $('.eight').html()],
    diagTwo: [$('.two').html(), $('.four').html(), $('.six').html()]
  }
  if (lines.rowOne.every(i => i === 'X') || lines.rowTwo.every(i => i === 'X') || lines.rowThree.every(i => i === 'X') || lines.columnOne.every(i => i === 'X') || lines.columnTwo.every(i => i === 'X') || lines.columnThree.every(i => i === 'X') || lines.diagOne.every(i => i === 'X') || lines.diagTwo.every(i => i === 'X')) {
    $('h2').html('X wins!')
  } else if (lines.rowOne.every(i => i === 'O') || lines.rowTwo.every(i => i === 'O') || lines.rowThree.every(i => i === 'O') || lines.columnOne.every(i => i === 'O') || lines.columnTwo.every(i => i === 'O') || lines.columnThree.every(i => i === 'O') || lines.diagOne.every(i => i === 'O') || lines.diagTwo.every(i => i === 'O')) {
    $('h2').html('O wins!')
  } else if (moveArr.length === 9) {
    $('h2').html('Cats!')
  }
  // checkForWin()
}

const emptyContent = function () {
  $('.box').html('')
  $('h2').html('')
  $('.borg').html('')
  moveArr = []
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// const onEndGame = function (event) {
//   if ($('h2').html() !=== "") {
//
//   }
// }
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

// const eventChain = {
//   fillContent: function() {
//     if (moveArr.length === 9) {
//       return
//     } else if (moveArr.length % 2 !== 0) {
//       $(event.target).html("O")
//       moveArr.push('O')
//     } else if (moveArr.length % 2 === 0) {
//       $(event.target).html('X')
//       moveArr.push('X')
//       console.log(moveArr)
//     }
//   },
//   checkForWin: function () {
//     if (moveArr[0] === movArr[1] && moveArr[1] === moveArr[3]) {
//       alert('you win!')
//     }
//   }
// }

module.exports = {
  fillContent,
  // checkForWin,
  emptyContent,
  addHandlers

}