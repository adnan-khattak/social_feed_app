import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Or your preferred background color
    // flex: 1, // Make the navbar take up the full screen width
    width: '100%'
  },
  logoAndTitle: {
    flexDirection: 'row', // Arrange logo and title horizontally (optional)
    alignItems: 'center', // Align logo and title vertically
  },
  text: {
    fontSize: 18, // Adjust font size as needed
    color: '#000', // Text color
  },
  title: {
    fontWeight: 'bold', // Make title bold
    marginLeft: 10, // Add margin between logo and title (optional)
  },
  icons: {
    flexDirection: 'row', // Arrange icons horizontally
  },
  iconText: {
    fontSize: 24, // Adjust icon size as needed
    color: '#000', // Icon color
  },
});

const NavigationBar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.logoAndTitle}>
        {/* Logo */}
        {/* <Text style={styles.text}>Logo</Text> */}

        {/* Title */}
        <Text style={[styles.text, styles.title]}>ABC Universe</Text>
      </View>

      <View style={styles.icons}>
        {/* Notification Icon */}
        <TouchableOpacity onPress={() => console.log('Notification pressed')}>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>

        {/* Profile Icon */}
        <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <Text style={styles.iconText}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationBar;
