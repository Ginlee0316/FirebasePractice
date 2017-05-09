$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyB8iZfRWie36seHo_p6PtFrIIHAVa3ZBCw",
        authDomain: "fir-practice-b4c3d.firebaseapp.com",
        databaseURL: "https://fir-practice-b4c3d.firebaseio.com",
        projectId: "fir-practice-b4c3d",
        storageBucket: "fir-practice-b4c3d.appspot.com",
        messagingSenderId: "326998094815"
    };
    firebase.initializeApp(config);

    $('#signin').on('click', function(){
        let email = $('#email').val();
        let password = $('#password').val();
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
            if (user !== null) {
                window.location = 'infoUpdate.html';
            } else {
                alert('登入失敗');
            }
        }).catch(function(error) {
            let errorCode = error.code;
            if (errorCode === 'auth/invalid-email') {
                alert('E-Mail 錯誤');
            } else if (errorCode === 'auth/user-not-found') {
                alert('不存在的使用者');
            } else if (errorCode === 'auth/wrong-password') {
                alert('密碼錯誤');
            }
        });
    });

    $('#signup').on('click', function() {
        let email = $('#email').val();
        let password = $('#password').val();
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
            /*firebase.database().ref('/users/' + user.uid).set({
                username: '',
                occupation: '',
                age: 0,
                description: '',
                email: ''
            });*/
            window.location = 'infoUpdate.html';
        }).catch(function(error) {
            let errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                alert('失敗，E-Mail 已被使用');
            } else if (errorCode === 'auth/invalid-email') {
                alert('失敗，不合法的 E-Mail');
            } else if (errorCode === 'auth/weak-password') {
                alert('失敗，密碼太弱，至少需超過 6 個字元');
            }
        });
    });

    $('#update_info').on('click', function() {
        let user = firebase.auth().currentUser;
        let username = $('#username').val();
        let occupation = $('#occupation').val();
        let age = $('#age').val();
        let description = $('#description').val();
            firebase.database().ref('/users/' + user.uid).set({
                username: username,
                occupation: occupation,
                age: age,
                description: description,
            });
            
            //this.aaaa();
           window.location = 'info.html';
        })/*.catch(function(error) {
            /*let errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                alert('失敗，E-Mail 已被使用');
            } else if (errorCode === 'auth/invalid-email') {
                alert('失敗，不合法的 E-Mail');
            } else if (errorCode === 'auth/weak-password') {
                alert('失敗，密碼太弱，至少需超過 6 個字元');
            }
            firebase.database().ref('/users/' + user.uid).set({
                username: '',
                occupation: '',
                age: 0,
                description: '',
                email: email
            });
        });*/
    });
function updateOrSetProfile(choice) {
    $('#a').text(username);
    //$('#b').text(email);
    $('#c').text(occupation);
    $('#d').text(age);
    $('#e').text(description);
}
