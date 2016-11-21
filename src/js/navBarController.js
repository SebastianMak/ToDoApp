// Nav bar controller
var $ = require('jquery');
var domManipulation = require('./DOM_manipulation.js')
var notesController = require('./notesController.js');
var registerController = require('./registerController.js')
var signInController = require('./signInController.js')

var $nav;
var $view;
var data = {
    '#notes': {},
    '#register': {}
};

function init() {
    // Init all views
    notesController.init();
    registerController.init()
    signInController.init()
    $(".button-collapse").sideNav();

    // Mount all event handlers
    $nav = $('#nav');
    $view = $('#view');
    $nav
        .find('.to-do-list-button').on('click', function() {
            moveToView('#notes');
        })
    $nav
        .find('.signin-button').on('click.signIn', function() {
            moveToView('#signIn')
        })
    $nav
        .find('.register-button').on('click', function() {
            moveToView('#register');
        })

    $nav.on('userSignedIn', function(event, userData) {
        data['#notes'].signedUserId = userData.id;
        domManipulation.activeUserNav(userData.username)
        moveToView('#notes');
        $nav
          .find('.register-button').off('click')
        $nav
            .find('.signin-button').off('click.signIn')
        $nav
            .find('.signin-button').on('click.singOut', function() {
                data['#notes'].signedUserId = null;
                domManipulation.deactivateUserNav()
                $nav
                    .find('.signin-button').off('click.singOut')
                $nav
                    .find('.signin-button').on('click.signIn', function() {
                        moveToView('#signIn')
                    })
                $nav
                    .find('.register-button').on('click', function() {
                        moveToView('#register');
                    })
                moveToView()
            })
    })
}

function moveToView(pageId) {
    var currentActiveTabId = $('.active-view').attr('id');
    $view
        .find('> .active-view')
        .removeClass('active-view')
        .trigger('viewInactivated', [data['#' + currentActiveTabId]])

    $view
        .find(pageId)
        .addClass('active-view')
        .trigger('viewActivated', [data[pageId]])

}

module.exports = {
    'init': init,
    'moveToView': moveToView
}
