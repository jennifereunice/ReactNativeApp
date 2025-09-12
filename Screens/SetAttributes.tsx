import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNApxorSDK from "react-native-apxor-sdk";   // ✅ import SDK

export function SetAttributes() {


   RNApxorSDK.trackScreen("SetAttributeScreen");
    RNApxorSDK.logNavigationEvent("SetAttributeScreen");

  // Default values
  const [mainOption, setMainOption] = useState("user");  // default → User Attributes
  const [keyName, setKeyName] = useState("");
  const [valueType, setValueType] = useState("string");  // default → String
  const [value, setValue] = useState("");
  const [customUserId, setCustomUserId] = useState("");

  const mainOptions = [
    { label: "User Attributes", value: "user" },
    { label: "Session Attributes", value: "session" },
    { label: "Custom UserId", value: "custom" },
  ];

  const valueTypes = [
    { label: "String", value: "string" },
    { label: "Integer", value: "integer" },
    { label: "Long", value: "long" },
    { label: "Float", value: "float" },
    { label: "Double", value: "double" },
    { label: "Boolean", value: "boolean" },
  ];

  // ✅ Submit handler
  const handleSubmit = () => {
    if (mainOption === "custom") {
      RNApxorSDK.setUserIdentifier(customUserId);
      console.log("Custom UserId set:", customUserId);
      return;
    }

    // Convert entered value based on selected type
    let finalValue: string | number | boolean = value; 
    if (valueType === "integer" || valueType === "long") {
      finalValue = parseInt(value);
    } else if (valueType === "float" || valueType === "double") {
      finalValue = parseFloat(value);
    } else if (valueType === "boolean") {
      finalValue = value.toLowerCase() === "true";
    }

    const data = { [keyName]: finalValue };

    if (mainOption === "user") {
      RNApxorSDK.setUserCustomInfo(data);
      console.log("User Info Set:", data);
    } else if (mainOption === "session") {
      RNApxorSDK.setSessionCustomInfo(data);
      console.log("Session Info Set:", data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* First Dropdown */}
      <Picker selectedValue={mainOption} onValueChange={(val) => setMainOption(val)}>
        {mainOptions.map((opt) => (
          <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </Picker>

      {/* Show key/value + type when user or session is selected */}
      {mainOption === "user" || mainOption === "session" ? (
        <View>
          <TextInput
            placeholder="Enter Key"
            style={styles.input}
            value={keyName}
            onChangeText={setKeyName}
          />

          <Picker selectedValue={valueType} onValueChange={(val) => setValueType(val)}>
            {valueTypes.map((opt) => (
              <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
            ))}
          </Picker>

          <TextInput
            placeholder="Enter Value"
            style={styles.input}
            value={value}
            onChangeText={setValue}
          />
        </View>
      ) : mainOption === "custom" ? (
        <TextInput
          placeholder="Enter Custom UserId"
          style={styles.input}
          value={customUserId}
          onChangeText={setCustomUserId}
        />
      ) : null}

      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
});
