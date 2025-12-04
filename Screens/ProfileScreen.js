import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.avatar} />
      <View style={styles.infoBox} />

      <Text style={styles.subtitle}>Settings</Text>
      <View style={styles.settingItem} />
      <View style={styles.settingItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoBox: {
    height: 80,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 30,
  },
  subtitle: { fontSize: 18, fontWeight: '600', marginBottom: 15 },
  settingItem: {
    height: 55,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 12,
  },
});
