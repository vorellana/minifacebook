const { Router } = require('express');
const router = Router();

// testing

var firebase = require("firebase/app");
var admin = require("firebase-admin");

require("firebase/auth");

var firebaseConfig = {
    apiKey: "AIzaSyAPMIFE9_EOnHaeBe1h-gZNYkNsNCkdopo",
    authDomain: "minifacebook-60c7a.firebaseapp.com",
    projectId: "minifacebook-60c7a",
    storageBucket: "minifacebook-60c7a.appspot.com",
    messagingSenderId: "732378170210",
    appId: "1:732378170210:web:65c2577daa5f3e8edca23b",
    measurementId: "G-Y41H32NPWC"
};

// warning
// var serviceAccount = require("path/to/serviceAccountKey.json");
var serviceAccount = require("../../serviceAccountKey.json");


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


router.get('/', (req, res) => {

    var data;
    var email = "vorellana99@hotmail.com";
    var password = "1a2s3d4F5G6H$";
    console.log("iniciando endpoint")
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("logueado");
            console.log(user.user.displayName);
            // Signed in
            data = {
                "login": "true",
                "nameUser": "vitucho"
            };

            res.json(data);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error en logueo");
            console.log(email + "/" + password);
            data = {
                "errorCode": error.code,
                "errorMessage": error.message
            };

            res.json(data);
        });
});


// // router.get('/', (req, res) => {
// //     var data;
// //     var uid = 'JCNN4Ui2etabujyjkxf8dzhrAPm2'; // vorellana99@hotmail.com

// //     admin.auth()
// //     .updateUser(uid, {
// //       displayName: 'Victor2',
// //     })
// //     .then((userRecord) => {
// //         // See the UserRecord reference doc for the contents of userRecord.
// //         console.log('Successfully updated user', userRecord.toJSON());

// //         data = {
// //                 "actualizado": "correcto"
// //         };

// //         res.json(data);
// //     })
// //     .catch((error) => {
// //       console.log('Error updating user:', error);
// //       res.json(error);
// //     });    
// // });


// router.get('/', (req, res) => {
//     const data = {
//         "name": "Juanito",
//         "nroLogin": "8"
//     };
//     res.json(data);
// });

module.exports = router;