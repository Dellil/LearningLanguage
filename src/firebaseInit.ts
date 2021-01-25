import firebase from 'firebase/app';

type FirebaseConfig = {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
};

const config: FirebaseConfig = {
	apiKey: 'AIzaSyA6CuBatjURuJL-DHk88kQUEGwl2FZTn1E',
	authDomain: 'learninglanguage-d4f28.firebaseapp.com',
	projectId: 'learninglanguage-d4f28',
	storageBucket: 'learninglanguage-d4f28.appspot.com',
	messagingSenderId: '349554875680',
	appId: '1:349554875680:web:9c8397cf85858d78ae4b45',
	measurementId: 'G-7XZ8Z2XZR6',
};

firebase.initializeApp(config);
