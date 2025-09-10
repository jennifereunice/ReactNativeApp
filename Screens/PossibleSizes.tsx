import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from "react-native";

export function PossibleSizes() {
  const [textWidths, setTextWidths] = useState<{ [key: number]: number }>({});

  const words = ["A", "AA", "AAA", "AAAA", "AAAAA", "AAAAAA", "AAAAAAA", "AAAAAAAA", "AAAAAAAAA", "AAAAAAAAAA"];

  const handleTextLayout = (index: number, e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setTextWidths((prev) => ({ ...prev, [index]: width }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.text}>   Diff Possible Sizes</Text>
      <View style={styles.container}>
        {words.map((word, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              { width: textWidths[index] ? textWidths[index] * 3 : "auto" }, 
            ]}
          >
            <Text
              style={styles.text}
              onLayout={(e) => handleTextLayout(index, e)} // measure text width
            >
              {word}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
    backgroundColor: "#F0F8FF",
  },
  button: {
    backgroundColor: "#3e7dc0",
    padding:5,
    borderRadius: 15,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
   
    fontWeight: "600",
  },
});
