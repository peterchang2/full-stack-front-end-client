//
const handle = require('../templates/helpers/index.handlebars')
// const handle2 = require('../templates/helpers/index2.handlebars')
const store = require('../store.js')
// const events = require('./events.js')

const failure = function (FailureResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('Upload failed, Try Again')
  $('.upload-message-box').removeClass('success-message')
  $('.upload-message-box').addClass('error-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 2500)
}

const idFailure = function (FailureResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('This ID does not exist')
  $('.upload-message-box').removeClass('success-message')
  $('.upload-message-box').addClass('error-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 2500)
}

const uploadSuccess = function (signUpResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html(`Image Successfully Uploaded`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 2500)
}

const getImageIdSuccess = function (imageSuccess) {
  store.imageid = imageSuccess.image.id
  // console.log(store.imageid)
  $('.upload-message-box').show(100)
  $('.image-wall').html(`<img src="${imageSuccess.image.url}">`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

const getAllImagesSuccess = function (getImageSuccess) {
  const y = getImageSuccess.images.forEach((x) => {
    // images.push(x)
    // console.log(getImageSuccess.url)
    if ((x.url).includes('.jpg') || (x.url).includes('.png')) {
      const index = handle({ images: getImageSuccess.images })
      $('.image-wall').html(index)
    }
    // else if ((x.url).includes('.gifv') || (x.url).includes('.mp4')) {
    //   const index2 = handle2({ gifs: getImageSuccess.images })
    //   $('.gif-wall').html(index2)
    // }
  })
}

const deleteImageIdSuccess = function (deleteImageSuccess) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html(`Image Successfully Deleted`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 2500)
}

module.exports = {
  failure,
  idFailure,
  uploadSuccess,
  getImageIdSuccess,
  getAllImagesSuccess,
  deleteImageIdSuccess
}
