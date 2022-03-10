import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD5FY2oywLE9HltKZ1ZKapOYO82aRqiI8g',
	authDomain: 'amz-clone-20220310.firebaseapp.com',
	projectId: 'amz-clone-20220310',
	storageBucket: 'amz-clone-20220310.appspot.com',
	messagingSenderId: '588250389664',
	appId: '1:588250389664:web:e61aab7207cfcfe49c3dc5',
	measurementId: 'G-9PKF4NVF2B'
}

//Init firebase app
const firebaseApp = initializeApp(firebaseConfig)

//init services
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { auth, db }
