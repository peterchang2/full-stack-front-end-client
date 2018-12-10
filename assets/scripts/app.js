'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const uploadEvents = require('./upload/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('.sign-out-btn').on('click', authEvents.onSignOut)

  $('.upload-area').on('submit', uploadEvents.onUpload)
  $('.get-image-by-id-form').on('submit', uploadEvents.onGetImage)
  $('.get-all-image-btn').on('click', uploadEvents.onGetAllImages)
  $('.img-wall').on('click', '.image-remove-btn', uploadEvents.onDeleteImage)
  $('.img-wall').on('submit', '.caption-update', uploadEvents.onCaptionUpdate)

  $('.sign-up-btn').click(function () {
    setTimeout(function () {
      $('.sign-up-form').fadeToggle()
    }, 200)
    $('.sign-in-form').fadeOut(200)
    // $('.sign-in-form').fadeOut(300)
  })

  $('.sign-in-btn').click(function () {
    setTimeout(function () {
      $('.sign-in-form').fadeToggle()
    }, 200)
    // $('.sign-in-form').fadeIn(300)
    $('.sign-up-form').fadeOut(200)
  })

  $('.chg-pass-btn').click(function () {
    $('.change-password-form').fadeToggle(300)
  })

  $('.get-image-by-id-btn').click(function () {
    $('.get-image-by-id-form').fadeToggle(300)
  })
})
