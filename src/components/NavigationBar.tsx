import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
type IconProps = {
    name: string;
    size: number;
    color: string;
  };
const Navbar = () => {
  return (
    <View style={navbar.navbar}>
      <View style={navbar.logoAndTitle}>
        {/* Logo */}
        {/* <Text style={navbar.text}>Logo</Text> */}
        
        {/* Title */}
        <Text style={[navbar.text, navbar.title]}>ABC Universe</Text>
      </View>

      <View style={navbar.icons}>
        {/* Notification Icon */}
        <TouchableOpacity onPress={() => console.log('Notification pressed')}>
          <Text style={navbar.iconText}>🔔</Text>

        {/* <FontAwesomeIcon icon="fa-solid fa-coffee" fixedWidth /> */}
        </TouchableOpacity>


        {/* Profile Icon */}
        <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <Text style={navbar.iconText}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const navbar = StyleSheet.create({
    navbar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
      backgroundColor: "#A0AEC0" // This is a gray color, you might need to adjust it to match the exact tone of 'bg-gray-400'
    },
    logoAndTitle: {
      flexDirection: "row",
      alignItems: "center"
    },
    text: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    title: {
      marginLeft: 8
    },
    icons: {
      flexDirection: "row",
      alignItems: "center"
    },
    iconText: {
      color: "white",
      fontSize: 20,
      marginRight: 16
    }
  });
  


export default Navbar;
