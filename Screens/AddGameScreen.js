import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function AddGameScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hoursPlayed, setHoursPlayed] = useState("");
  const [genre, setGenre] = useState("");

  const handleSave = () => {
    alert("Game saved (UI only, Firebase coming next)");
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
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
        placeholder="e.g., PS5, Xbox, PC, Switch"
        value={platform}
        onChangeText={setPlatform}
      />

      <Text style={styles.label}>Hours Played</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter hours"
        keyboardType="numeric"
        value={hoursPlayed}
        onChangeText={setHoursPlayed}
      />

      <Text style={styles.label}>Genre</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Action, RPG, Sports"
        value={genre}
        onChangeText={setGenre}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Game</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
