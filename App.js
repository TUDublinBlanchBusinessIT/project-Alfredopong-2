import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import HomeScreen from './Screens/HomeScreen';
import LibraryScreen from './Screens/LibraryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import StatsScreen from './Screens/StatsScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1e1e1e' },
          headerTintColor: '#ffffff',
          tabBarStyle: { backgroundColor: '#1e1e1e' },
          tabBarActiveTintColor: '#ffffff',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
