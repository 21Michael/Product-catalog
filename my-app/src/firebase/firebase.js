import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBufuTzNyae7QJdcvBaWZS9cZNNV5RD9N4",
    authDomain: "product-catalog-6482a.firebaseapp.com",
    databaseURL: "https://product-catalog-6482a.firebaseio.com",
    projectId: "product-catalog-6482a",
    storageBucket: "product-catalog-6482a.appspot.com",
    messagingSenderId: "413969548514",
    appId: "1:413969548514:web:f9029c25e9e36558414abb",
    measurementId: "G-5PMLYHCHXS"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();
const auth = firebase.auth();

const firebaseHandlers = {
    loading: function(snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING:
                console.log('Upload is running');
                break;
            default:
                break;
        }
    },
    error: function(error) {
        console.log(error)
    }
};

export {
    auth,
    database,
    storage,
    firebase,
    firebaseHandlers
}