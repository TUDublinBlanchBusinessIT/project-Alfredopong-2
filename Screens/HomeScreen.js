import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.card} />
        <View style={styles.card} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended Games</Text>
        <View style={styles.cardLarge} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  card: {
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
  },
  cardLarge: {
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});
