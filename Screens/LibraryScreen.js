import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
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

  const coverImages = {
    "forspoken": require("../assets/covers/forspoken.jpg"),
    "uncharted": require("../assets/covers/uncharted.jpg"),
    "god of war ragnarok": require("../assets/covers/gow_ragnarok.jpg"),
  };

  function renderItem({ item }) {
    const key = item.title.toLowerCase();
    const coverSource = coverImages[key] || require("../assets/covers/default.jpg");

    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.label}>Platform</Text>
            <Text style={styles.value}>{item.platform}</Text>

            <Text style={styles.label}>Hours</Text>
            <Text style={styles.value}>{item.hoursPlayed}</Text>

            <Text style={styles.label}>Genre</Text>
            <Text style={styles.value}>{item.genre}</Text>
          </View>

          <Image source={coverSource} style={styles.thumbnail} />
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
    padding: 16,
    marginBottom: 18,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e7e7e7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  info: {
    flex: 1,
    paddingRight: 12,
  },

  thumbnail: {
    width: 110,
    height: 150,
    borderRadius: 12,
    backgroundColor: "#ddd",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
    marginTop: 6,
  },

  value: {
    fontSize: 14,
    color: "#000",
    fontWeight: "400",
  },

  deleteButton: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
    alignItems: "center",
  },

  deleteText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
  },
});
