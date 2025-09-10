import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BottomNavigationScreen() {
  const [activeTab, setActiveTab] = useState("home"); // Track active tab

  // Text that should change between the buttons
  const getMiddleText = () => {
    if (activeTab === "home") return " Home Fragment";
    if (activeTab === "chat") return "Chat Fragment";
    if (activeTab === "settings") return "Settings Fragment";
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Content with buttons + changing text */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Action Event 1")}
        >
          <Text style={styles.buttonText}>Action Event 1</Text>
        </TouchableOpacity>

        {/* Text that changes based on tab */}
        <Text style={styles.fragmentText}>{getMiddleText()}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Action Event 2")}
        >
          <Text style={styles.buttonText}>Action Event 2</Text>
        </TouchableOpacity>
      </View>

      {/* Footer navigation */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setActiveTab("home")}
        >
          <FontAwesome
            name="home"
            size={24}
            //color={activeTab === "home" }
          />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setActiveTab("chat")}
        >
          <FontAwesome
            name="inbox"
            size={24}
          //  color={activeTab === "chat" ? "yellow" : "#fff"}
          />
          <Text style={styles.label}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setActiveTab("settings")}
        >
          <FontAwesome
            name="cog"
            size={24}
           // color={activeTab === "settings" ? "yellow" : "#fff"}
          />
          <Text style={styles.label}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F8FF" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  fragmentText: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
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
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3e7dc0ff",
    paddingVertical: 10,
  },
  iconButton: { alignItems: "center" },
  label: { color: "#fff", fontSize: 12, marginTop: 4 },
});
