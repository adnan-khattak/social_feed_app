import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faPlus, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Notification from '../components/Notification';
import CreatePostScreen from '../screens/CreatePostScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === 'Feed') {
            icon = faHome;
          } else if (route.name === 'CreatePost') {
            icon = faPlus;
          } else if (route.name === 'Profile') {
            icon = faUser;
          } else if (route.name === 'Notification') {
            icon = faBell;
          }
          return <FontAwesomeIcon icon={icon || faHome} size={size} color={color} />;
           },
      })}
    //   tabBarOptions={{
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    //   }}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="CreatePost" component={CreatePostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
