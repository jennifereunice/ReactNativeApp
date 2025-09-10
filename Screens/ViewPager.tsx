import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

export function ViewPager() {
  const [activeTab, setActiveTab] = useState(0); // index instead of text

  const tabs = ["Home", "Chat", "Settings"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with 3 menu buttons */}
      <View style={styles.header}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === index && styles.activeTab]}
            onPress={() => setActiveTab(index)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pager view */}
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setActiveTab(e.nativeEvent.position)}
        //setPage={activeTab}
      >
        {/* Home Page */}
        <View key="1" style={styles.body}>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 1 - Home")}>
            <Text style={styles.buttonText}>Action Event 1</Text>
          </TouchableOpacity>
          <Text style={styles.contentText}>This is Home Screen</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 2 - Home")}>
            <Text style={styles.buttonText}>Action Event 2</Text>
          </TouchableOpacity>
        </View>

        {/* Chat Page */}
        <View key="2" style={styles.body}>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 1 - Chat")}>
            <Text style={styles.buttonText}>Action Event 1</Text>
          </TouchableOpacity>
          <Text style={styles.contentText}>This is Chat Screen</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 2 - Chat")}>
            <Text style={styles.buttonText}>Action Event 2</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Page */}
        <View key="3" style={styles.body}>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 1 - Settings")}>
            <Text style={styles.buttonText}>Action Event 1</Text>
          </TouchableOpacity>
          <Text style={styles.contentText}>This is Settings Screen</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Event 2 - Settings")}>
            <Text style={styles.buttonText}>Action Event 2</Text>
          </TouchableOpacity>
        </View>
      </PagerView>

      <Text style={styles.swipeNote}> Swipe left or right between tabs </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F8FF" },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3e7dc0",
    paddingVertical: 12,
  },
  tabButton: { paddingVertical: 8, paddingHorizontal: 16 },
  tabText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  activeTab: { borderBottomWidth: 3, borderBottomColor: "#fff" },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contentText: { fontSize: 20, fontWeight: "bold", color: "#333", marginVertical: 20 },
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
  swipeNote: { textAlign: "center", padding: 10, fontSize: 14, color: "#555" },
});
