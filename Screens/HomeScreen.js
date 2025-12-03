import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const summary = {
    nowPlaying: 2,
    backlog: 12,
    completed: 30,
    weeklyHours: 8,
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>GameTrack Dashboard</Text>
      <Text style={styles.subtitle}>Quick overview of your gaming week</Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Now Playing</Text>
          <Text style={styles.cardValue}>{summary.nowPlaying}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Backlog</Text>
          <Text style={styles.cardValue}>{summary.backlog}</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Completed</Text>
          <Text style={styles.cardValue}>{summary.completed}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Hours this week</Text>
          <Text style={styles.cardValue}>{summary.weeklyHours}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>This Week</Text>

        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.gameTitle}>Cyberpunk 2077</Text>
          <Text style={styles.gameMeta}>PS5 · Story progress 65%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.gameTitle}>Elden Ring</Text>
          <Text style={styles.gameMeta}>PC · Trophy hunt in progress</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#aaa',
    marginBottom: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 12,
    marginRight: 8,
    borderRadius: 8,
  },
  cardLabel: {
    color: '#bbb',
    fontSize: 12,
    marginBottom: 4,
  },
  cardValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  listItem: {
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  gameTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  gameMeta: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 2,
  },
});
