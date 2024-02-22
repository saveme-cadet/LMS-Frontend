// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// 나중에 환경 변수 처리
const firebaseConfig = {
  apiKey: 'AIzaSyCCgtyHymt42HVBdVaBEWDf8LgXBlC01yg',
  authDomain: 'lms-project-9dc3e.firebaseapp.com',
  projectId: 'lms-project-9dc3e',
  storageBucket: 'lms-project-9dc3e.appspot.com',
  messagingSenderId: '910207178093',
  appId: '1:910207178093:web:5d9ac15070de4790937664',
  measurementId: 'G-5RR091E8S5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
