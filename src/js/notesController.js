var $ = require('jquery');
var domManipulation = require('./DOM_manipulation.js')
var firebaseInteraction = require('./firebaseInteraction.js')
    // var $notes;
var userId;

function init() {
    // $notes = $('#notes');
    listEvents()
    $('#notes').on('viewActivated', function(event, data) {
        userId = data.signedUserId;
        $('#notes').trigger('updateUI', userId);
    });

    $('#notes').on('viewInactivated', function(event, data) {
        $('.to-do-list').find('ul').remove()
        $('#notes').trigger('detachUser', userId)
        userId = data.signedUserId;

    })
}

function listEvents() {

    $('.add-input').on('click', function() {
        $('.hide-div').slideToggle('slow')
        if ($('.btn-change').text() == "add") {
            $('.btn-change').text("remove")
        } else {
            $('.btn-change').text("add");
        }
    })
    $('.delete-btn').on('click', function() {
        $('.remove-items').toggleClass('hide')
        $('.check-delete').toggleClass('hide')
        $('.rmv-container').toggleClass('hide')
    });
    $('.add-to-list-btn').on('click', function() {
        // domManipulation.applySpinner()
        var dataInfo = {
            note: $('textarea').val(),
            id: userId
        }
        $('.add-to-list-btn').trigger('userAddedNote', [dataInfo])
        $('.empty-textarea')
            .val('')
            .removeAttr('style')
            .siblings('.active')
            .removeClass('active')
        $('.add-to-list-btn').prop('disabled', true)
    })
    $('.empty-textarea').on('keyup', function() {
        if ($('.empty-textarea').val()) {
            $('.add-to-list-btn').prop('disabled', false)
        } else {
            $('.add-to-list-btn').prop('disabled', true)
        }
    })
    $('.remove-items').on('click', function() {
        $('.item-delete:checked').each(function(i, e) {
            // domManipulation.applySpinner()
            var dataInfo = {
                note: $(e).attr('note-attribute'),
                id: userId
            }
            $('.add-to-list-btn').trigger('userDeletedNote', dataInfo)
        })
        $('.remove-all-checkbox').prop('checked', false)
    });
    $('.select-filter').on('change', function() {
        domManipulation.applyFilter()
    })
    $('.remove-all-checkbox').on('change', function() {
        if ($('.remove-all-checkbox').prop('checked')) {
            $('.item-delete').prop('checked', true)
        } else {
            $('.item-delete').prop('checked', false)
        }
    })
}
$('#notes').on('usersNotes', function(event, notes) {
    //Empty list
    $('.to-do-list').empty()
        // Reset the remove button
    $('.remove-items').addClass('hide')
    $('.rmv-container').addClass('hide')

    if (notes) {

        var $ul = $('<ul/>', {
            class: "collection"
        })
        $('.to-do-list').append($ul)


        for (var key in notes) {
            var $li = domManipulation.createElement(key, notes[key].note, notes[key].checked);
            $ul.append($li)
        }
        // find all intem check and attach event handler on change
        $ul.find('.item-check').on('change', function(a, b) {
            var dataInfo = {
                    note: $(this).attr('note-attribute'),
                    checked: $(this).prop('checked'),
                    id: userId
                }
                // domManipulation.applySpinner()

            $ul.find('.item-check').trigger('Changed', dataInfo)

        })
        $('.delete-button').on('click', function() {
            var $self = $(this)
            $self
                .parent()
                .slideToggle(function() {
                    $self
                        .parent()
                        .siblings('.change-buttons-div')
                        .slideToggle()
                })

        })
        $('.user-uncheck-delete').on('click', function() {
            var $self = $(this)
            $self
                .parent()
                .slideToggle(function() {
                    $self
                        .parent()
                        .siblings('.initial-buttons-div')
                        .slideToggle()
                })

        })
        $('.user-check-delete').on('click', function() {
            var dataInfo = {
                note: $(this).parents('.collection-item').attr('note-attribute'),
                id: userId
            }
            $('.user-check-delete').trigger('userDeletedNote', dataInfo)
        })
    }
    domManipulation.applyFilter()

})


module.exports = {
    init: init,
}
