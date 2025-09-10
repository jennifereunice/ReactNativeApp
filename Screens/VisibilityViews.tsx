import React, { useState } from "react";
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function VisibilityViews() {
  const [showBtn1, setShowBtn1] = useState(true); // controls visibility of Btn1
const [showtext, setShowtext] = useState(true);
  return (
      <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      {/* Btn1 (only visible when showBtn1 is true) */}
      {showBtn1 && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Action Event 1 </Text>
        </TouchableOpacity>
      )}

      {/* Toggle Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => setShowBtn1(!showBtn1)}
      >
        <Text style={styles.text}>
          {showBtn1 ? "Hide" : "Show"} Action Event 1
        </Text>
      </TouchableOpacity>


    </View>

    <View style={styles.container}>
      {/* Btn1 (only visible when showBtn1 is true) */}
      {showtext && (
      
        <Text>This is sample text to check</Text>
      )}

      {/* Toggle Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => setShowtext(!showtext)}
      >
        <Text style={styles.text}>
          {showtext ? "Hide" : "Show"} Text
        </Text>
      </TouchableOpacity>

      
    </View>
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
  button: {
    backgroundColor: "#3e7dc0",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: "60%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
