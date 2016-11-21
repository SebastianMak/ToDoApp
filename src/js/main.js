// var Materialize = require('node-materialize');
var $ = require('jquery');

var domManipulation = require('./DOM_manipulation.js')
var navBarController = require('./navBarController.js');
var firebaseInteraction = require('./firebaseInteraction.js')
var notesController = require('./notesController.js')
window.$ = $;
// Materialize.inject();
$(document).ready(function() {
  // Initialize the NavBar
  navBarController.init();

  $('#view').on('registerTriggred', function (event, payLoad) {
    firebaseInteraction.registerUser(payLoad, function (registerCheck) {
      if(registerCheck){
         // User signs in
         $('#signIn').trigger('signInTriggred', [payLoad])
      }
      else {
        domManipulation.applyErrorToInput($('[name="register_user_name"]'), "Username already taken")
      }
    })
})

  $('#view').on('signInTriggred', function (event, payLoad) {
    firebaseInteraction.signInUser(payLoad, function (signInCheck, userData) {
      if (signInCheck) {
        $('#nav').trigger('userSignedIn', [userData])
      }
      else {
        domManipulation.applyErrorToInput($('[name="signIn_username"]'), "Incorrect username or password")
        domManipulation.applyErrorToInput($('[name="signIn_password"]'), "Incorrect username or password")
      }
    })
  })
  $('#view').on('detachUser', function (event, userId) {
    firebaseInteraction.detachEvent(userId)
  })

  $('#view').on('updateUI', function (event, userData) {
    firebaseInteraction.requestFirebaseData(userData, function (notes) {
      $('#notes').trigger('usersNotes', [notes])
    })
  })
  $('#view').on('userAddedNote', function (event, dataInfo) {
    firebaseInteraction.addNote(dataInfo)
  })
  $('#view').on('userDeletedNote', function (event, dataInfo) {
    firebaseInteraction.deleteNote(dataInfo)
  })
  $('#view').on('Changed', function (event, dataInfo) {
    firebaseInteraction.updateNote(dataInfo)
  })
});
