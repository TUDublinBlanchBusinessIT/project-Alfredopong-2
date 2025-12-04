import { View, Text, StyleSheet } from 'react-native';

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Stats</Text>

      <View style={styles.chart} />
      <View style={styles.chartSmall} />
      <View style={styles.chartSmall} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  chart: {
    height: 200,
    backgroundColor: '#ddd',
    borderRadius: 12,
    marginBottom: 20,
  },
  chartSmall: {
    height: 120,
    backgroundColor: '#e5e5e5',
    borderRadius: 12,
    marginBottom: 15,
  },
});
