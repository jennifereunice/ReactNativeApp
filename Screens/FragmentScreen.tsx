
// Screens/FragmentScreen.tsx
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function FragmentScreen() {
  const [currentFragment, setCurrentFragment] = useState(1);

  const renderFragment = () => {
    if (currentFragment === 1) {
      return (
        <View style={styles.fragmentBox}>
          <Text style={styles.fragmentTitle}> Fragment - 1</Text>

          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 1 in Fragment 1")}>
            <Text style={styles.buttonText}>Event 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 2 in Fragment 1")}>
            <Text style={styles.buttonText}>Event 2</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.fragmentBox}>
          <Text style={styles.fragmentTitle}> Fragment - 2</Text>

          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 1 in Fragment 2")}>
            <Text style={styles.buttonText}>Event 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 2 in Fragment 2")}>
            <Text style={styles.buttonText}>Event 2</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderFragment()}

    <View style={styles.footer} >
      <TouchableOpacity
        style={[styles.button, { marginTop: 30 }]}
        onPress={() => setCurrentFragment(currentFragment === 1 ? 2 : 1)}
      >
        <Text style={styles.buttonText}>
          {currentFragment === 1 ? "Next Fragment" : "Back"}
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  fragmentBox: {
    width: "100%",
    padding: 20,
    backgroundColor: "#db1414ff",
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
  },
  fragmentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
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
  footer:{
    marginTop:20,
    width: "100%",
    padding: 20,
    backgroundColor: "#46335fff",
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
  },
});
