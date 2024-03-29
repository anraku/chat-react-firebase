import firebase from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
export const firebaseDB = firebase.database();
export const firebaseAuth = firebase.auth();

export default firebase;
