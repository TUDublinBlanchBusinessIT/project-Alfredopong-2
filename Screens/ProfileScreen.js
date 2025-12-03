import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AU</Text>
      </View>
      <Text style={styles.name}>Alfred Ukpong</Text>
      <Text style={styles.username}>@gametrack_user</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Email</Text>
          <Text style={styles.rowValue}>alfred@example.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Preferred Platform</Text>
          <Text style={styles.rowValue}>PlayStation / PC</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Theme</Text>
          <Text style={styles.rowValue}>Dark</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Notifications</Text>
          <Text style={styles.rowValue}>Enabled</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4fc3f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  avatarText: {
    color: '#111',
    fontSize: 28,
    fontWeight: '700',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
  },
  username: {
    color: '#aaa',
    marginBottom: 24,
  },
  section: {
    width: '100%',
    marginTop: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  row: {
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 8,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLabel: {
    color: '#fff',
  },
  rowValue: {
    color: '#bbb',
  },
});
