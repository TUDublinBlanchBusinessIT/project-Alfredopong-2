import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { saveGame } from "../firebase";

export default function AddGameScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hoursPlayed, setHoursPlayed] = useState("");
  const [genre, setGenre] = useState("");

  const handleSave = async () => {
    const gameData = {
      title,
      platform,
      hoursPlayed,
      genre,
      createdAt: new Date(),
    };

    const success = await saveGame(gameData);

    if (success) {
      alert("Game saved to Firebase!");
      navigation.goBack();
    } else {
      alert("Failed to save game.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Game</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter game title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="e.g., PS5, Xbox, PC, Switch"
        value={platform}
        onChangeText={setPlatform}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter hours"
        value={hoursPlayed}
        onChangeText={setHoursPlayed}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="e.g., Action, RPG, Sports"
        value={genre}
        onChangeText={setGenre}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16
  },
  saveButton: {
    backgroundColor: "#222",
    height: 55,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
