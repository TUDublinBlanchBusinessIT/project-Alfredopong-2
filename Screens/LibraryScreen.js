import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
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

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Platform</Text>
          <Text style={styles.value}>{item.platform}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Hours</Text>
          <Text style={styles.value}>{item.hoursPlayed}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Genre</Text>
          <Text style={styles.value}>{item.genre}</Text>
        </View>

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
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 20,
  },

  placeholderBox: {
    padding: 25,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },

  placeholderText: {
    fontSize: 16,
    color: "#777",
  },

  card: {
    padding: 18,
    marginBottom: 18,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e7e7e7",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },

  infoBlock: {
    flexDirection: "column",
    marginBottom: 12,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 2,
  },

  value: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
  },

  deleteButton: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },

  deleteText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
  },
});
