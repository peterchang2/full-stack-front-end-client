const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onUpload = function (event) {
  event.preventDefault()
  const uploadData = getFormFields(event.target)
  if (uploadData.images.date === '' || uploadData.images.captio === '' || uploadData.images.url === '') {
    $('.upload-message-box').html(`Fields cannot be empty`)
    $('.upload-message-box').removeClass('success-message')
    $('.upload-message-box').addClass('error-message')
  } else {
    // console.log('this is uploadData', uploadData.images.date)
    $(event.target).trigger('reset')
    api.upload(uploadData.images.date, uploadData.images.caption, uploadData.images.url)
      .then(() => onGetAllImages(event))
      .catch(ui.failure)
  }
}

const onGetAllImages = function (event) {
  event.preventDefault()
  api.getAllImages()
    .then(ui.getAllImagesSuccess)
    .catch(ui.failure)
}

const onCaptionUpdate = function (event) {
  event.preventDefault()
  const id = $(event.target).parent('div').data('id')
  const caption = $('.update-caption-form-' + event.target.attributes['data-id'].value).val()
  api.captionUpdate(id, caption)
    .then(() => onGetAllImages(event))
    // .then(ui.captionUpdateSuccess)
    .catch(ui.failure)
}

const onGetImage = function (event) {
  event.preventDefault()
  const imageData = getFormFields(event.target)
  $(event.target).trigger('reset')
  const imageId = imageData.images.id
  // console.log(imageId)
  api.getImageId(imageId)
    .then(ui.getImageIdSuccess)
    .catch(ui.idFailure)
}

const onDeleteImage = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('div').data('id')
  api.deleteImageById(id)
    .then(() => onGetAllImages(event))
    .catch(ui.failure)
}

module.exports = {
  onUpload,
  onGetImage,
  onGetAllImages,
  onDeleteImage,
  onCaptionUpdate
}
