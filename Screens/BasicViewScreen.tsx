import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App"; // ✅ import your navigator type

type NavProp = NativeStackNavigationProp<RootStackParamList, "Basic Views">;

export function BasicViewScreen() {
  const navigation = useNavigation<NavProp>();
  const [propValue, setPropValue] = useState("");

  const menuItems: Array<keyof RootStackParamList> = [
    "Change Screen",
    "List View",
    "Fragments",
    "Recycler View",
    "Visibility Views",
    "Possible Shapes",
    "Possible Sizes",
    "Scroll Views",
    "Horizontal Scroll Views",
    "Swipe Refresh Layout",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Basic Views Menu</Text>

      {menuItems.map((screen) => (
        <TouchableOpacity
          key={screen}
          style={styles.button}
          onPress={() => navigation.navigate(screen)}
        >
          <Text style={styles.buttonText}>{screen}</Text>
        </TouchableOpacity>
      ))}

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FF4500",
  },
  button: {
    backgroundColor: "#3e7dc0ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 6,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    width: "80%",
    height: 40,
    borderBottomWidth: 1, // 👈 single line input like in ActionScreen
    borderColor: "#333",
    fontSize: 16,
    paddingHorizontal: 8,
    marginTop: 20,
  },
});
