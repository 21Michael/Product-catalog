import firebase from 'firebase/app'
import 'firebase/storage'

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

export {
    storage,
    firebase 
}