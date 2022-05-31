import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import { getDatabase, ref } from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyCaR9vXvwcmOhN4FgK1cBvwvtmbYcIKxb4",
    authDomain: "chats-gb.firebaseapp.com",
    projectId: "chats-gb",
    storageBucket: "chats-gb.appspot.com",
    messagingSenderId: "1059124096842",
    appId: "1:1059124096842:web:379a6a432a1fcc29e69bb3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);

export const userRef = ref(db, "user");

export const chatsRef = ref(db, 'chats');

export const messagesRef = ref(db, 'messages');

export const getChatRefById = (id) => ref(db, `chats/${id}`);

export const getChatMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);

export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);