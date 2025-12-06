import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBngyeixuBFMdOup933DmrKJpxXqsm-sRo",
  authDomain: "gametrack-app.firebaseapp.com",
  projectId: "gametrack-app",
  storageBucket: "gametrack-app.appspot.com",
  messagingSenderId: "1062231037366",
  appId: "1:1062231037366:web:8cab22741a02bf56db1d17"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveGame(gameData) {
  try {
    await addDoc(collection(db, "games"), gameData);
    return true;
  } catch (error) {
    console.log("Firestore error:", error);
    return false;
  }
}

export function listenForGames(callback) {
  return onSnapshot(collection(db, "games"), (snapshot) => {
    const games = [];
    snapshot.forEach((doc) => {
      games.push({ id: doc.id, ...doc.data() });
    });
    callback(games);
  });
}
