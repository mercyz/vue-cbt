import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyC-QYsAwNj5wFzxKMjYKCundUmpMDhLx9s",
    authDomain: "brainiacsdev-e63c4.firebaseapp.com",
    databaseURL: "https://brainiacsdev-e63c4.firebaseio.com",
    projectId: "brainiacsdev-e63c4",
    storageBucket: "brainiacsdev-e63c4.appspot.com",
    messagingSenderId: "553655215830",
    appId: "1:553655215830:web:9444f024c6fd1363490b77",
    measurementId: "G-5NFFPHE46G"
})

export const db = app.firestore();
