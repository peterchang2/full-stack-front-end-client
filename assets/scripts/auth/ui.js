'use strict'

const store = require('../store.js')

const failure = function (FailureResponse) {
  $('.message-box').html('Something Went Wrong, Try Again')
  $('.message-box').removeClass('success-message')
  $('.message-box').addClass('error-message')
}
const changePassFailure = function () {
  $('.message-box').html('New Password Cannot Match Old Password')
  $('.message-box').removeClass('success-message')
  $('.message-box').addClass('error-message')
}

const signUpSuccess = function (signUpResponse) {
  $('.message-box').html('You Signed Up Successfully')
  $('.sign-up-form').slideUp(200)
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  console.log(store.user)
  $('.message-box').html('You Signed In Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('.sign-up-form').fadeOut(200)
  $('.sign-in-form').fadeOut(200)
  $('.chg-pass-btn').show()
  $('.sign-out-btn').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.message-box').html('You Changed Password Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('#change-password-form').slideUp(500)
}

const signOutSuccess = function () {
  store.over = true
  $('.message-box').html('You Signed Out Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('.chg-pass-btn').hide()
  $('#change-password-form').fadeOut(200)
  $('.sign-out-btn').hide()
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('#change-password-form').trigger('reset')
  // setTimeout(function () {
  //   $('.message-box').fadeOut()
  // }, 2000)
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  changePassFailure

}
