import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AddGameScreen({ navigation }) {

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState("");
  const [genre, setGenre] = useState("");

  const saveGame = async () => {
    if (!title || !platform) {
      Alert.alert("Missing fields", "Game title and platform are required.");
      return;
    }

    try {
      await addDoc(collection(db, "games"), {
        title,
        platform,
        hoursPlayed: hours,
        genre,
        createdAt: new Date()
      });

      Alert.alert("Success", "Game saved successfully!");
      navigation.navigate("Library");

    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not save game.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Game</Text>

      <Text style={styles.label}>Game Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter game title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Platform</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. PS5, Xbox, PC"
        value={platform}
        onChangeText={setPlatform}
      />

      <Text style={styles.label}>Hours Played</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter hours"
        value={hours}
        onChangeText={setHours}
      />

      <Text style={styles.label}>Genre</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Action, RPG"
        value={genre}
        onChangeText={setGenre}
      />

      <Pressable style={styles.button} onPress={saveGame}>
        <Text style={styles.buttonText}>Save Game</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    marginBottom: 5
  },
  input: {
    backgroundColor: "#eee",
    padding: 14,
    borderRadius: 6,
    marginBottom: 14
  },
  button: {
    backgroundColor: "#111",
    padding: 18,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
});
