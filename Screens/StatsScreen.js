import { StyleSheet, Text, View } from 'react-native';

export default function StatsScreen() {
  const stats = {
    totalGames: 46,
    completedGames: 30,
    completionRate: '65%',
    totalHours: 420,
    avgSession: '1h 20m',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gaming Stats</Text>

      <View style={styles.statCard}>
        <Text style={styles.label}>Total games tracked</Text>
        <Text style={styles.value}>{stats.totalGames}</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.label}>Games completed</Text>
        <Text style={styles.value}>{stats.completedGames}</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.label}>Completion rate</Text>
        <Text style={styles.value}>{stats.completionRate}</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.label}>Total hours played</Text>
        <Text style={styles.value}>{stats.totalHours}</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.label}>Average session length</Text>
        <Text style={styles.value}>{stats.avgSession}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  label: {
    color: '#bbb',
    fontSize: 13,
  },
  value: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 4,
  },
});
