//
const handle = require('../templates/helpers/index.handlebars')
const handle2 = require('../templates/helpers/index2.handlebars')
const store = require('../store.js')
// const events = require('./events.js')

const failure = function (FailureResponse) {
  $('.upload-message-box').html('Upload failed, Try Again')
  $('.upload-message-box').removeClass('success-message')
  $('.upload-message-box').addClass('error-message')
}

const idFailure = function (FailureResponse) {
  $('.upload-message-box').html('This ID does not exist')
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
  // console.log(store.imageid)
  $('.image-wall').html(`<img src="${imageSuccess.image.url}">`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

const getAllImagesSuccess = function (getImageSuccess) {
  // const images = []
  const y = getImageSuccess.images.forEach((x) => {
    // images.push(x)
    console.log(x.url)
    if ((x.url).includes('.jpg') || (x.url).includes('.png')) {
      const index = handle({ images: getImageSuccess.images })
      $('.image-wall').html(index)
    } else if ((x.url).includes('.gifv') || (x.url).includes('.mp4')) {
      const index2 = handle2({ images: getImageSuccess.images })
      $('.image-wall').html(index2)
    }
  })
}

const deleteImageIdSuccess = function (deleteImageSuccess) {
  $('.upload-message-box').html(`Image Successfully Deleted`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

module.exports = {
  failure,
  idFailure,
  uploadSuccess,
  getImageIdSuccess,
  getAllImagesSuccess,
  deleteImageIdSuccess
}
