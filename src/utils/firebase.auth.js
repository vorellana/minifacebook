const fbAuthCtrl = {};
let firebase = require("firebase/app");
require("firebase/auth");

let firebaseConfig = {
    apiKey: "AIzaSyAPMIFE9_EOnHaeBe1h-gZNYkNsNCkdopo",
    authDomain: "minifacebook-60c7a.firebaseapp.com",
    projectId: "minifacebook-60c7a",
    storageBucket: "minifacebook-60c7a.appspot.com",
    messagingSenderId: "732378170210",
    appId: "1:732378170210:web:65c2577daa5f3e8edca23b",
    measurementId: "G-Y41H32NPWC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

fbAuthCtrl.login = async (email, password) => {
    let response;

    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in successful.
            console.log("logueado");
            response = {email: user.user.email, successLogin: true};
        })
        .catch((error) => {
            // An error happened.
            console.log("Error en logueo");
            response = {
                errorCode: error.code,
                errorMessage: error.message,
                message: "El Password es incorrecto",
                successLogin: false
            };
        });    
    return response;
};

fbAuthCtrl.logout = async () => {
    let response;

    await firebase.auth().signOut().then(() => {
        // Sign-out successful.
        response = { successLogout: true }
      }).catch((error) => {
        // An error happened.
        response = { 
            errorCode: error.code,
            errorMessage: error.message,
            successLogout: false }
      });

    return response;
}

module.exports = fbAuthCtrl;