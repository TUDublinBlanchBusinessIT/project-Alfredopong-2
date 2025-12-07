import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { listenForGames } from "../firebase";

export default function StatsScreen() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const unsubscribe = listenForGames((data) => {
      setGames(data);
    });
    return () => unsubscribe();
  }, []);

  if (games.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>
            Add games to see your statistics.
          </Text>
        </View>
      </View>
    );
  }

  const totalGames = games.length;
  const totalHours = games.reduce(
    (sum, g) => sum + Number(g.hoursPlayed),
    0
  );
  const avgHours = (totalHours / totalGames).toFixed(1);

  const platformCount = {};
  games.forEach((g) => {
    platformCount[g.platform] =
      (platformCount[g.platform] || 0) + 1;
  });
  const topPlatform = Object.keys(platformCount).reduce((a, b) =>
    platformCount[a] > platformCount[b] ? a : b
  );

  const genreCount = {};
  games.forEach((g) => {
    genreCount[g.genre] =
      (genreCount[g.genre] || 0) + 1;
  });
  const topGenre = Object.keys(genreCount).reduce((a, b) =>
    genreCount[a] > genreCount[b] ? a : b
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>

      <View style={styles.statBox}>
        <Text style={styles.label}>Total Games</Text>
        <Text style={styles.value}>{totalGames}</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.label}>Total Hours Played</Text>
        <Text style={styles.value}>{totalHours}</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.label}>Average Hours / Game</Text>
        <Text style={styles.value}>{avgHours}</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.label}>Most Played Platform</Text>
        <Text style={styles.value}>{topPlatform}</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.label}>Most Common Genre</Text>
        <Text style={styles.value}>{topGenre}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
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
  statBox: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
});
