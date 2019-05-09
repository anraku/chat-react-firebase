import firebase from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
// export const firebaseDb = firebaseApp.database();

export default firebase;
