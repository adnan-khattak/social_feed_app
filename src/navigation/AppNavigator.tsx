import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FeedScreen from '../screens/FeedScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Notification from '../components/Notification';
import NavigationBar from '../components/NavigationBar';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (

      <Stack.Navigator initialRouteName='post'>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="feed" component={FeedScreen} options={{headerShown:false}}/>
        <Stack.Screen name="post" component={CreatePostScreen} options={{headerShown:false}}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="notify" component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name="navigation" component={NavigationBar} options={{headerShown:false}}/>
        <Stack.Screen name="bottom" component={BottomTabNavigator} options={{headerShown:false}}/>
      </Stack.Navigator>

  );
};

export default AppNavigator;
