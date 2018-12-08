'use strict'

const store = require('../store.js')
const config = require('../config.js')

const upload = function (date, caption, url) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/images/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'image': {
          'date': date,
          'caption': caption,
          'url': url,
          'user_id': store.user.id
        }
      })
  })
}

const getAllImages = function (inputData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

const getImageId = function (imageId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images/' + imageId,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const signIn = function (inputData) {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/sign-in/',
//     contentType: 'application/json',
//     data: JSON.stringify(inputData)
//   })
// }
//
// const changePassword = function (inputData) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/change-password/',
//     contentType: 'application/json',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: JSON.stringify(inputData)
//   })
// }
//
// const signOut = function (inputData) {
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + '/sign-out/',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  upload,
  getImageId,
  getAllImages
}
