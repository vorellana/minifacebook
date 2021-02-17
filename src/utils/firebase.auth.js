const fbAuthCtrl = {};
let firebase = require("firebase/app");
require("firebase/auth");
require('dotenv').config();

let firebaseConfig = JSON.parse(process.env.AUTH_CRED);

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