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

    return (
      <>
        

        <Text style={styles.contentText}>{screenText}</Text>

       
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

         <View style={styles.body}>{renderContent()}</View>

      {/* Header with 3 menu buttons */}
      
        

      {/* Footer navigation */}
            <View style={styles.footer}>
       <TouchableOpacity
          style={[styles.tabButton, activeTab === "Home" && styles.activeTab]}
          onPress={() => setActiveTab("Home")}
        >
          <FontAwesome name="home" size={24} color="#fff" />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>
      
      <TouchableOpacity
          style={[styles.tabButton, activeTab === "Chat" && styles.activeTab]}
          onPress={() => setActiveTab("Chat")}
        >
          <FontAwesome name="inbox" size={24} color="#fff" />
          <Text style={styles.label}>Chat</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Settings" && styles.activeTab]}
          onPress={() => setActiveTab("Settings")}
        >
          <FontAwesome name="cog" size={24} color="#fff" />
          <Text style={styles.label}>Settings</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3e7dc0",
    paddingVertical: 12,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#fff",
  },
  body: {
    flex: 1,
    justifyContent: "center", // vertical center
    alignItems: "center",     // horizontal center
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 20,
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
  swipeNote: {
    textAlign: "center",
    padding: 10,
    fontSize: 14,
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3e7dc0ff",
    paddingVertical: 10,
  },
  iconButton: { alignItems: "center" },
  label: { color: "#fff", fontSize: 12, marginTop: 4 },

});
