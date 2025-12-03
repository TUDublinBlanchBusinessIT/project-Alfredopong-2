import { FlatList, StyleSheet, Text, View } from 'react-native';

const MOCK_GAMES = [
  { id: '1', title: 'God of War Ragnarök', platform: 'PS5', status: 'Now Playing' },
  { id: '2', title: 'Baldur’s Gate 3', platform: 'PC', status: 'Backlog' },
  { id: '3', title: 'Spider-Man 2', platform: 'PS5', status: 'Completed' },
  { id: '4', title: 'Starfield', platform: 'XBOX', status: 'Wishlist' },
];

export default function LibraryScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>{item.platform}</Text>
      </View>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Library</Text>
      <FlatList
        data={MOCK_GAMES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  meta: {
    color: '#aaa',
    fontSize: 12,
  },
  status: {
    color: '#4fc3f7',
    fontWeight: '600',
  },
  separator: {
    height: 8,
  },
});
