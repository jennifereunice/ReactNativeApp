import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export function ChangeScreen() {
  const [activeTab, setActiveTab] = useState("Home"); // default tab

  const renderContent = () => {
    const screenText =
      activeTab === "Home"
        ? "Screen one"
        : activeTab === "Chat"
        ? "Screen two"
        : "Screen three";

    return <Text style={styles.contentText}>{screenText}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Screen content */}
      <View style={styles.body}>{renderContent()}</View>

      {/* Footer navigation */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Home")}
        >
          <FontAwesome
            name="home"
            size={24}
            color={activeTab === "Home" ? "yellow" : "#fff"}
          />
          <Text
            style={[
              styles.label,
              { color: activeTab === "Home" ? "yellow" : "#fff" },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Chat")}
        >
          <FontAwesome
            name="inbox"
            size={24}
            color={activeTab === "Chat" ? "yellow" : "#fff"}
          />
          <Text
            style={[
              styles.label,
              { color: activeTab === "Chat" ? "yellow" : "#fff" },
            ]}
          >
            Chat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Settings")}
        >
          <FontAwesome
            name="cog"
            size={24}
            color={activeTab === "Settings" ? "yellow" : "#fff"}
          />
          <Text
            style={[
              styles.label,
              { color: activeTab === "Settings" ? "yellow" : "#fff" },
            ]}
          >
            Settings
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
  },
  body: {
    flex: 1,
    justifyContent: "center", // vertical center
    alignItems: "center", // horizontal center
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3e7dc0ff",
    paddingVertical: 10,
  },
  tabButton: { alignItems: "center" },
  label: { fontSize: 12, marginTop: 4 },
});
