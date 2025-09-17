import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RNApxorSDK from "react-native-apxor-sdk";

export function SetFontActivity() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

 

  const handleButtonPress = (type: string) => {
    RNApxorSDK.logAppEvent(`${type}-Pressed`, {
      fontFile: input1,
      fontUrl: input2,
    });
    console.log(`${type} button pressed with fontFile=${input1}, fontUrl=${input2}`);
  };

  return (
    <SafeAreaView style={styles.container} testID="SetFontActivityScreen">
      <TextInput
        style={styles.input}
        placeholder="Enter font file name"
        value={input1}
        onChangeText={setInput1}
        testID="FontFileInput"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter font url"
        value={input2}
        onChangeText={setInput2}
        testID="FontUrlInput"
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleButtonPress("NoBackup")}
        testID="NoBackupButton"
      >
        <Text style={styles.btnText}>No Backup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleButtonPress("ExternalCache")}
        testID="ExternalCacheButton"
      >
        <Text style={styles.btnText}>External Cache</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleButtonPress("Cache")}
        testID="CacheButton"
      >
        <Text style={styles.btnText}>Cache</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleButtonPress("Files")}
        testID="FilesButton"
      >
        <Text style={styles.btnText}>Files</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  btn: {
    alignItems: "center",
    marginTop: 10,
    height: 60,
    backgroundColor: "#4682B4",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#888",
    paddingVertical: 8,
    marginBottom: 20,
    fontSize: 16,
  },
});
