import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_KEY",
  projectId: "YOUR_KEY",
  storageBucket: "YOUR_KEY",
  messagingSenderId: "YOUR_KEY",
  appId: "YOUR_KEY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const saveGame = async (gameData) => {
  try {
    await addDoc(collection(db, "games"), gameData);
    return true;
  } catch (error) {
    return false;
  }
};

export const getGames = async () => {
  try {
    const snapshot = await getDocs(collection(db, "games"));
    const results = [];
    snapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    return results;
  } catch (error) {
    return [];
  }
};
