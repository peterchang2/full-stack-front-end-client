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
  $('.message-box').show(100)

  $('.message-box').html('You Signed Up Successfully')
  $('.sign-up-form').slideUp(200)
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('.message-box').show(100)
  $('.user-name').html(`${signInResponse.user.email} - `)
  $('.message-box').html('You Signed In Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('.upload-section').addClass('block')
  $('.upload-section').removeClass('hidden')
  $('.sign-up-form').fadeOut(200)
  $('.sign-in-form').fadeOut(200)
  $('.chg-pass-btn').show()
  $('.sign-out-btn').show()
  $('.get-all-image-btn').show()
  $('.get-image-by-id-btn').show()
  $('.delete-image-btn').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.message-box').show(100)

  $('.message-box').html('You Changed Password Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('#change-password-form').slideUp(500)
  setTimeout(function () {
    $('.message-box').fadeOut(300).empty()
  }, 3000)
}

const signOutSuccess = function () {
  $('.message-box').show(100)

  $('.message-box').html('You Signed Out Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('.user-name').empty()
  $('.chg-pass-btn').hide()
  $('#change-password-form').fadeOut(200)
  $('.sign-out-btn').hide()
  $('.get-all-image-btn').hide()
  $('.get-image-by-id-btn').hide()
  $('.delete-image-btn').hide()
  $('.upload-section').removeClass('block')
  $('.upload-section').addClass('hidden')
  $('.image-wall').empty()
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('#change-password-form').trigger('reset')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  changePassFailure

}
