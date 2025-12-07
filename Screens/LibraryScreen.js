import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { listenForGames, deleteGame } from "../firebase";

export default function LibraryScreen() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const unsub = listenForGames(setGames);
    return () => unsub();
  }, []);

  async function handleDelete(id) {
    await deleteGame(id);
  }

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>Platform: {item.platform}</Text>
        <Text>Hours: {item.hoursPlayed}</Text>
        <Text>Genre: {item.genre}</Text>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Library</Text>

      {games.length === 0 ? (
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>No games added yet.</Text>
        </View>
      ) : (
        <FlatList
          data={games}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  placeholderBox: {
    height: 120,
    backgroundColor: "#eee",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#555",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
