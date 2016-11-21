var $ = require('jquery');
var $signIn;

function init() {
  $signIn = $('#signIn');
  $('#singIn-form').on('submit', function (event) {
    event.preventDefault()
    var username = getInputValue($('[name="signIn_username"]'))
    var password = getInputValue($('[name="signIn_password"]'))
    if(username && password){
      payLoad = {
        'username' : username,
        'password' : password
      }
      $signIn.trigger('signInTriggred', [payLoad])
    }
  })
}

function getInputValue($input) {
  return $input.val()
}
module.exports = {
  init: init,
}
