import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      {/* Search games (placeholder, no action yet) */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Search games</Text>
      </View>

      {/* Add new game - navigates to AddGame screen */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("AddGame")}
      >
        <Text style={styles.cardText}>Add new game</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Recommended Games</Text>
      <View style={[styles.card, styles.recommendationsCard]}>
        <Text style={styles.placeholderText}>
          Game recommendations will appear here.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#ffffff",
    minHeight: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
  },
  recommendationsCard: {
    height: 160,
  },
  placeholderText: {
    color: "#777",
    textAlign: "center",
  },
});
