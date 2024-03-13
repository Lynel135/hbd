// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7HYQQ-OZAfma51Y9KdhvhOIDGqhWEbFE",
  authDomain: "birthday-741ec.firebaseapp.com",
  projectId: "birthday-741ec",
  storageBucket: "birthday-741ec.appspot.com",
  messagingSenderId: "650845800731",
  appId: "1:650845800731:web:23171de41ac580ac372bbe",
  measurementId: "G-960F6J0VK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);