import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home';
import LibraryScreen from '../../Screens/Library';
import SearchScreen from '../../Screens/Search';
import PremiumScreen from '../../Screens/Premium';
import { tabs } from './config';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const ICONS = {
    Home: 'home-outline',
    Search: 'search-outline',
    Library: 'library-outline',
    Premium: 'play-circle-outline'
}

// const tabs = [
//     {
//         name: 'Home',
//         component: HomeScreen
//     },
//     {
//         name: 'Library',
//         component: LibraryScreen
//     },
//     {
//         name: 'Search',
//         component: SearchScreen
//     },
//     {
//         name: 'Premium',
//         component: PremiumScreen
//     }
// ]

export default TabNavigator = () => {
    return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // You can return any component that you like here!
          return <Ionicons name={ICONS[route.name]} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#eee',
        inactiveTintColor: '#a4a4a4',
        tabStyle: {
            paddingVertical: 5
        },
        style: {
            backgroundColor: '#131313',//color you want to change
            // padding: 10
          }
      }}
      >
        {
            tabs.map(tab => <Tab.Screen name={tab.name} component={tab.component}  key={tab.name}/>)
        }
    </Tab.Navigator>
    );
}