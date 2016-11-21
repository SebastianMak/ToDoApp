var $ = require('jquery');

function applySpinner() {
    $('.preloader-wrapper').addClass('active');
    $('.overlay').removeClass('hide')
}

function removeSpinner() {
    $('.preloader-wrapper').removeClass('active')
    $('.overlay').addClass('hide')
}
function createElement(id, text, isDone) {

    var $li = $('<li/>', {
        class: 'collection-item dismissable list-items apply-overflow',
        'note-attribute': id
    });
    var $p = $('<p/>', {
        class: "check-delete hide left"
    });

    var $input = $('<input/>', {
        type: "checkbox",
        class: "filled-in item-delete",
        id: id + "y",
        'note-attribute': id,
    })
    var $label = $('<label/>', {
        for: id + "y"
    })
    var $p2 = $('<p/>', {
        class: "right check-marked"
    })
    var $input2 = $('<input/>', {
        type: "checkbox",
        class: "item-check",
        id: id + "x",
        'note-attribute': id,
        checked: isDone
    })
    var $label2 = $('<label/>', {
        for: id + "x"
    })
    var $button = $('<button/>', {
        class: "btn waves-effect waves-light right delete-button"
    })
    var $i = $('<i/>', {
        class: 'material-icons right delete-icon',
        text: "delete"
    })
    var $div = $('<div/>', {
        class: "right initial-buttons-div"
    })
    var $div2 = $('<div/>', {
        class: "right change-buttons-div "
    })
    var $button2 = $('<button/>', {
        class: 'btn waves-effect waves-light user-check-delete'
    })
    var $button3 = $('<button/>', {
        class: 'btn waves-effect waves-light user-uncheck-delete'
    })
    var $i1 = $('<i/>', {
        class: 'material-icons user-check-delete-icon',
        text: 'done'
    })
    var $i2 = $('<i/>', {
        class: 'material-icons user-check-delete-icon',
        text: 'clear'
    })
    $li.append($p)
    $li.append(text)
    $li.append($div)
    $li.append($div2)
    $div.append($button)
    $div2.append($button2)
    $div2.append($button3)
    $button.append($i)
    $button2.append($i1)
    $button3.append($i2)
    $li.append($p2)
    $div.append($p2)
    $p2.append($input2).append($label2)
    $p.append($input).append($label)
    return $li;
}

function applyFilter() {
    var $select = $('.select-filter').val()
        // Check if the selected filter is all
    if ($select == "all") {
        //remove class hide form all
        $('.list-items').removeClass('hide')
    }
    //Check if the selected filter is complete
    if ($select == "completed") {
        //add class hide to all
        $('.list-items')
            .addClass('hide')
            .has('.item-check:checked')
            .removeClass('hide')
    }
    //Check if the selected filter is incomplete
    if ($select == "pending") {
        //add class hide to all
        $('.list-items')
            .addClass('hide')
            .has($(".item-check:not(:checked)"))
            .removeClass('hide')
    }
}

function changeDiv(divToChange) {
    $(this)
        .parent()
        .siblings(divToChange)
        .removeClass('hide')
    $(this)
        .parent()
        .addClass('hide')
}
function applyErrorToInput($input, errorMessage) {
  $input
    .removeClass('valid')
    .addClass('invalid')
  $input
    .siblings('.validation-messages')
    .find('.custom-error')
    .text(errorMessage);
}
function applySuccesToInput($input) {
  $input
  .removeClass('invalid')
  .addClass('valid');
}
function activeUserNav(userName) {
  var $signInBtn = $('.signin-button')
  var $is = $("<i/>", {
  class: "material-icons left",
  text: "person_outline"})
  $signInBtn
    .text('Sign Out')
    .append($is)
  $registerBtn = $('.register-button')
  $ir = $("<i/>", {
  class: "material-icons left",
  text: "person"})
  $registerBtn
    .text(userName)
    .append($ir)
}
function deactivateUserNav() {
  var $signInBtn = $('.signin-button')
  var $is = $("<i/>", {
  class: "material-icons left",
  text: "person"})
  $signInBtn
    .text('Sign In')
    .append($is)
  var $registerBtn = $('.register-button')
  var $ir = $("<i/>", {
  class: "material-icons left",
  text: "person_outline"})
  $registerBtn
    .text("Register")
    .append($ir)
}
module.exports = {
    'applySpinner': applySpinner,
    'removeSpinner': removeSpinner,
    'createElement': createElement,
    'applyFilter': applyFilter,
    'applyErrorToInput': applyErrorToInput,
    'applySuccesToInput': applySuccesToInput,
    'activeUserNav' : activeUserNav,
    'deactivateUserNav' : deactivateUserNav
}
