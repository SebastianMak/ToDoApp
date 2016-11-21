var $ = require('jquery');
var domManipulation = require('./DOM_manipulation.js');
var $register;

function init() {
  $register = $('#register');
  $register
    .find('[name=register_user_name]').on('blur', function () {
      valideUsername()
    })
  $register
    .find('[name="register_email"]').on('blur', function () {
        valideEmailAdress()
    })
  $register
    .find('[name="register_password"]').on('blur', function () {
        validePassword()
    })
  $register
    .find('[name="re-enter-password"]').on('blur', function () {
        reValidePassword()
    })
  $('#register-form').on('submit', function (event) {
    event.preventDefault()
     var payLoad
     var username = valideUsername();
     var emailAdress = valideEmailAdress();
     var password = validePassword();
     var rePassword = reValidePassword();
     if(username && emailAdress && password && rePassword){
       payLoad = {
         'username' : username,
         'emailAdress' : emailAdress,
         'password' : password,
         'rePassword' : rePassword
       }
       $register.trigger('registerTriggred', [payLoad])
     }

  })
  // $register.on('ACTIV', function() {
  //   // console.log('Register controller is ACTIVE!!!!');
  // });
}

  function valideUsername() {
    var $username = $('[name="register_user_name"]')
    var userNamePattern = $username.val().match(/^[A-Za-z0-9 ]{3,20}$/)
    if(!userNamePattern){
      if (!$username.val()) {
        domManipulation.applyErrorToInput($username, "Required field")
        return false
      }
        domManipulation.applyErrorToInput($username, "Invalid username")
        return false
    }
    else {
      domManipulation.applySuccesToInput($username)
      return $username.val()
    }
  }
  function valideEmailAdress() {
    var $emailAdress = $('[name="register_email"]')
    var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailPattern = regEx.test($emailAdress.val())
    if(!emailPattern){
      if ($emailAdress.val() == "") {
        domManipulation.applyErrorToInput($emailAdress, 'Required Field');
        return false
      }
        domManipulation.applyErrorToInput($emailAdress, 'Invalid email adress');
        return false
    }
    else {
        domManipulation.applySuccesToInput($emailAdress)
        return $emailAdress.val()
    }
  }
  function validePassword() {
    var $password = $('[name="register_password"]')
    var passwordPattern = $password.val().match(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/)
    if (!passwordPattern) {
      if($password.val() == ""){
        domManipulation.applyErrorToInput($password, 'Password required');
        return false
      }
      domManipulation.applyErrorToInput($password, 'Incomplete password');
      return false
    }
    else {
      domManipulation.applySuccesToInput($password)
      return $password.val()
    }
  }
  function reValidePassword() {
    var $rePassword = $('[name="re-enter-password"]');
    var $password = $('[name="register_password"]')
    if ($rePassword.val() === $password.val()){
      domManipulation.applySuccesToInput($rePassword)
      return $rePassword.val()
    }
    else {
      domManipulation.applyErrorToInput($rePassword, 'Incorrect password');
      return false
    }
  }

module.exports = {
  init: init,
}
