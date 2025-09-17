import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const HomeTopBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Left: Drawer Menu */}
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text style={styles.menuText}>☰ Menu</Text>
      </TouchableOpacity>

      {/* Center: Title */}
      {/* <Text style={styles.title}>Home</Text> */}

      {/* Right: Search and Three Dots */}
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => console.log("Search pressed")} style={styles.iconButton}>
          <FontAwesome name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("More pressed")} style={styles.iconButton}>
          <FontAwesome name="ellipsis-v" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    height: 50,                // standard app bar height
    width: '100%',             // full width
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#d81275ff', // header color
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});

export default HomeTopBar;
