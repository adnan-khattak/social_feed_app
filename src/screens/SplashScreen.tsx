import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Login');
  //   }, 5000); // 5 seconds

  //   return () => clearTimeout(timer);
  // }, [navigation]);
 
  return (
    <View style={styles.container}>
      {/* <Image source={require('./path_to_your_image')} style={styles.logo} /> */}
      <Text style={styles.title}>Your Social Feed App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  logo: {
    width: Dimensions.get('window').width * 0.5, // Adjust logo size as needed
    height: Dimensions.get('window').width * 0.5, // Adjust logo size as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SplashScreen;
