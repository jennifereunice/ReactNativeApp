// ActionScreen.tsx
import React, { useEffect } from "react";
import RNApxorSDK from "react-native-apxor-sdk";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export function ActionScreen() {
  useEffect(() => {
    RNApxorSDK.logNavigationEvent("ActionScreen");
    RNApxorSDK.trackScreen("ActionScreenTrack");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text testID="txtTitle">This is PinWheel App</Text>

      <TouchableOpacity
        testID="btnStartSession"
        style={styles.button}
        onPress={() => console.log("Start Session")}
      >
        <Text style={styles.buttonText}>Start Session</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="btnEndSession"
        style={styles.button}
        onPress={() => console.log("End Session")}
      >
        <Text style={styles.buttonText}>End Session</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="btnActionEvent1"
        style={styles.button}
        onPress={() => {
          console.log("action event 1");
          RNApxorSDK.logAppEvent("ACTION EVENT-1");
        }}
      >
        <Text style={styles.buttonText}>Action Event 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="btnActionEvent2"
        style={styles.button}
        onPress={() => RNApxorSDK.logAppEvent("ACTION EVENT-2")}
      >
        <Text style={styles.buttonText}>Action Event 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="btnActionEvent3"
        style={styles.button}
        onPress={() => RNApxorSDK.logAppEvent("ACTION EVENT-3")}
      >
        <Text style={styles.buttonText}>Action Event 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="btnClientEvent1"
        style={styles.button}
        onPress={() => {
          RNApxorSDK.logClientEvent("CLIENT EVENT-1", {
            userId: "johnwick@example.com",
            value: 1299,
            item: "Sony Head Phone 1201",
          });
          return null;
        }}
      >
        <Text style={styles.buttonText}>Client Event 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="btnTag1"
        style={styles.button}
        onPress={() => console.log("Tag 1 pressed")}
      >
        <Text style={styles.buttonText}>Tag 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="btnTag2"
        style={styles.button}
        onPress={() => console.log("Tag 2 pressed")}
      >
        <Text style={styles.buttonText}>Tag 2</Text>
      </TouchableOpacity>

      <TextInput
        testID="inputActivity1"
        style={styles.input}
        placeholder="Enter prop for Activity 1"
        multiline={false}
        numberOfLines={1}
      />
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
    borderBottomWidth: 1,
    borderColor: "#333",
    fontSize: 16,
    paddingHorizontal: 8,
  },
});
