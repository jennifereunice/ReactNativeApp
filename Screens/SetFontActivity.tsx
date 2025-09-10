
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export function SetFontActivity() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
 

  return (
    <SafeAreaView style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Enter font file name"
        value={input1}
        onChangeText={setInput1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter font url"
        value={input2}
        onChangeText={setInput2}
      />

     
        <TouchableOpacity
               style={styles.btn}
        >
          <Text style={styles.btnText}>No Backup</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.btn}
        >
          <Text style={styles.btnText}>external cache</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.btn}
               >
          <Text style={styles.btnText}>Cache</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          
        >
          <Text style={styles.btnText}>Files</Text>
        </TouchableOpacity>
  

      {/* Display result */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
 
 
  btn: {
    alignItems:"center",
    marginTop:10,
    height:60,
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
  borderColor: "#888",   // grey line
  paddingVertical: 8,
  marginBottom: 20,
  fontSize: 16,
},

 
});
