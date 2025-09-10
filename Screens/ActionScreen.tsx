// ActionScreen.tsx
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {  Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export  function ActionScreen() {
  return (
    <SafeAreaView style={styles.container}>

   <Text>This is PinWheel App</Text> 

      

      <TouchableOpacity style={styles.button} onPress={() => console.log("Start Session")}>
        <Text style={styles.buttonText}>Start Session</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("End Session")}>
        <Text style={styles.buttonText}>End Session</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Action Event 1")}>
        <Text style={styles.buttonText}>Action Event 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Action Event 2")}>
        <Text style={styles.buttonText}>Action Event 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Action Event 3")}>
        <Text style={styles.buttonText}>Action Event 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Client Event 1")}>
        <Text style={styles.buttonText}>Client Event 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Tag 1 pressed")}>
        <Text style={styles.buttonText}>Tag 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Tag 2 pressed")}>
        <Text style={styles.buttonText}>Tag 2</Text>
      </TouchableOpacity>


      <TextInput
        style={styles.input}
        placeholder="Enter prop for Activity 1"
        value=" "
        multiline={false}       
        numberOfLines={1}
       // onChangeText={setActivityProp}
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF4500",
    marginBottom: 20,
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
    borderBottomWidth: 1,   // 👈 only bottom line
    borderColor: "#333",
    fontSize: 16,
    paddingHorizontal: 8,
  },
});
