// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBeBUHn5MMzPOwKEMghjUwzrUMCrjMuFGQ",

  authDomain: "auth-tutorial-c5a14.firebaseapp.com",

  projectId: "auth-tutorial-c5a14",

  storageBucket: "auth-tutorial-c5a14.appspot.com",

  messagingSenderId: "525229428569",

  appId: "1:525229428569:web:03b0cc35bc5aa68cb30648",

  measurementId: "G-CDH00C7T92",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
