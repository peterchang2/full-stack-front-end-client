//

const store = require('../store.js')
// const events = require('./events.js')

const failure = function (FailureResponse) {
  $('.upload-message-box').html('Upload failed, Try Again')
  $('.upload-message-box').removeClass('success-message')
  $('.upload-message-box').addClass('error-message')
}

const uploadSuccess = function (signUpResponse) {
  $('.upload-message-box').html(`Image Successfully Uploaded`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

const getImageIdSuccess = function (imageSuccess) {
  console.log(imageSuccess)
  $('.upload-message-box').html(`Image ID: <img src="${imageSuccess.image.url}">retrieved`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

module.exports = {
  failure,
  uploadSuccess,
  getImageIdSuccess
}
