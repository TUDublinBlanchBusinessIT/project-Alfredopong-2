import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Quick Actions Section */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.placeholderBox}>
        <Text style={styles.placeholderText}>Search games</Text>
      </View>

      <View style={styles.placeholderBox}>
        <Text style={styles.placeholderText}>Add new game</Text>
      </View>

      {/* Recommended Games Section */}
      <Text style={styles.sectionTitle}>Recommended Games</Text>

      <View style={[styles.placeholderBox, styles.recommendedBox]}>
        <Text style={styles.placeholderText}>
          Game recommendations will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },

  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },

  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 10, marginBottom: 10 },

  placeholderBox: {
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  recommendedBox: {
    height: 160,
  },

  placeholderText: { color: '#555' },
});
