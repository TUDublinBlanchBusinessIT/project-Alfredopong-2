import { View, Text, StyleSheet } from 'react-native';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Library</Text>

      <View style={styles.searchBar} />

      <View style={styles.section}>
        <View style={styles.gameCard} />
        <View style={styles.gameCard} />
        <View style={styles.gameCard} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  searchBar: {
    height: 45,
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    marginBottom: 20,
  },
  section: {},
  gameCard: {
    height: 70,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 12,
  },
});
