//
const handle = require('../templates/helpers/index.handlebars')
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
  store.imageid = imageSuccess.image.id
  console.log(store.imageid)
  $('.upload-message-box').html(`<img src="${imageSuccess.image.url}">`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

const getAllImagesSuccess = function (getImageSuccess) {
  // console.log(getImageSuccess.images)
  const index = handle({ images: getImageSuccess.images })
  $('.image-wall').html(index)
  // $('.img-wall').html(`<img src="${getImageSuccess.images.url}">`)
  // $('.upload-message-box').removeClass('error-message')
  // $('.upload-message-box').addClass('success-message')
}

const deleteImageIdSuccess = function (deleteImageSuccess) {
  $('.upload-message-box').html(`Image Successfully Deleted`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

module.exports = {
  failure,
  uploadSuccess,
  getImageIdSuccess,
  getAllImagesSuccess,
  deleteImageIdSuccess
}
