'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const uploadEvents = require('./upload/event.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('.sign-out-btn').on('click', authEvents.onSignOut)
  $('.upload-btn').on('click', uploadEvents.onUpload)

  $('.sign-up-btn').click(function () {
    setTimeout(function () {
      $('.sign-up-form').fadeIn()
    }, 200)
    $('.sign-in-form').fadeOut(200)
    // $('.sign-in-form').fadeOut(300)
  })

  $('.sign-in-btn').click(function () {
    setTimeout(function () {
      $('.sign-in-form').fadeIn()
    }, 200)
    // $('.sign-in-form').fadeIn(300)
    $('.sign-up-form').fadeOut(200)
  })

  $('.chg-pass-btn').click(function () {
    $('.change-password-form').fadeIn(300)
  })
})
