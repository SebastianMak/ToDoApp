var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBoqPLw-QjEtdSn156R-iHiv2MwktFZ0QM",
    // authDomain: "to-do-list-fed15.firebaseapp.com",
    databaseURL: "https://to-do-list-fed15.firebaseio.com",
    // storageBucket: "to-do-list-fed15.appspot.com",
    // messagingSenderId: "780475658827"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref()

function registerUser(payLoad, registerCallback) {
    findUser(payLoad.username, function(userData) {
        var registerCheck
        if (userData) {
            registerCheck = false
        } else {
            dbRef.child('users').push(payLoad)
            registerCheck = true
        }
        registerCallback(registerCheck)
    })
}

function signInUser(payLoad, signInCallback) {
    // var notes = dbRef.child('users/' + userId + '/notes');
    findUser(payLoad.username, function(userData) {
        var signInCheck
        if (userData && (userData.password === payLoad.password)) {
            signInCheck = true
                // notes.off('value')
        } else {
            signInCheck = false
        }
        signInCallback(signInCheck, userData)
    })
}

function findUser(username, callback) {
    dbRef.child('users').once('value', function(snapshot) {
        var snapshotValue = snapshot.val()
        var userData = null;
        for (var key in snapshotValue) {
            if (snapshotValue[key].username === username) {
                userData = snapshotValue[key];
                userData.id = key
            }
        }
        callback(userData);
    })
}

function requestFirebaseData(userId, notesCallback) {
    var notes = dbRef.child('users/' + userId + '/notes');
    notes.on('value', function(snap) {
        notesCallback(snap.val())
    })
}

function addNote(dataInfo) {

    dbRef.child('users/' + dataInfo.id + '/notes/').push({
        note: dataInfo.note
    })
}

function deleteNote(dataInfo) {
    dbRef.child('users/' + dataInfo.id + '/notes/' + dataInfo.note + '/').remove()
}

function updateNote(dataInfo) {
    dbRef.child('users/' + dataInfo.id + '/notes/' + dataInfo.note + '/').update({
        checked: dataInfo.checked
    })
}

function detachEvent(userId) {
    var notes = dbRef.child('users/' + userId + '/notes');
    notes.off('value')
}

module.exports = {
    'requestFirebaseData': requestFirebaseData,
    'registerUser': registerUser,
    'signInUser': signInUser,
    'addNote': addNote,
    'deleteNote': deleteNote,
    'updateNote': updateNote,
    'detachEvent': detachEvent
}
