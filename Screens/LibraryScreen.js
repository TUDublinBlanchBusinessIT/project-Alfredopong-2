import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { listenForGames } from "../firebase";

export default function LibraryScreen() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenForGames((data) => {
      setGames(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading games...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Game Library</Text>

      {games.map((game) => (
        <View key={game.id} style={styles.card}>
          <Text style={styles.title}>{game.title}</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Platform:</Text>
            <Text style={styles.value}>{game.platform}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Hours Played:</Text>
            <Text style={styles.value}>{game.hoursPlayed}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Genre:</Text>
            <Text style={styles.value}>{game.genre}</Text>
          </View>

          <Text style={styles.date}>
            Added: {new Date(game.createdAt.seconds * 1000).toLocaleDateString()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 }
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  row: {
    flexDirection: "row",
    marginBottom: 4
  },
  label: {
    fontWeight: "600",
    width: 120
  },
  value: {
    fontWeight: "400"
  },
  date: {
    marginTop: 8,
    fontSize: 12,
    color: "#777"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
