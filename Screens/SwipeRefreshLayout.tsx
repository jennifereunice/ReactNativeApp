import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import RNApxorSDK from "react-native-apxor-sdk";


export function SwipeRefreshLayout() {
   RNApxorSDK.trackScreen("SetFontActivityScreen");
    RNApxorSDK.logNavigationEvent("SetFontActivityScreen");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Text 1 - Before Refresh</Text>
        <Text style={styles.text}>Text 2 - Before Refresh</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // vertically center
    alignItems: "center",     // horizontally center
    backgroundColor: "#F0F8FF",
  },
  text: {
    // made it visible (was white on light bg)
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 8,
  },
});
