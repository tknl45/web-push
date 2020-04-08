// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFTAWkui6XkeZQjqq-rggrtOAVtfa1fuw",
    authDomain: "hellonotify-1da2b.firebaseapp.com",
    databaseURL: "https://hellonotify-1da2b.firebaseio.com",
    projectId: "hellonotify-1da2b",
    storageBucket: "hellonotify-1da2b.appspot.com",
    messagingSenderId: "526762413089",
    appId: "1:526762413089:web:11a233d5dbc664800ba760"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();