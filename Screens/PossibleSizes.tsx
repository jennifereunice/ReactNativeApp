import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import RNApxorSDK from "react-native-apxor-sdk";

export function PossibleSizes() {
  const [textWidths, setTextWidths] = useState<{ [key: number]: number }>({});

  const words = ["A", "AA", "AAA", "AAAA", "AAAAA", "AAAAAA", "AAAAAAA", "AAAAAAAA", "AAAAAAAAA", "AAAAAAAAAA"];

 

  const handleTextLayout = (index: number, e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setTextWidths((prev) => ({ ...prev, [index]: width }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Diff Possible Sizes</Text>

      <View style={styles.container}>
        {words.map((word, index) => {
          const measuredWidth = textWidths[index] || 40; // fallback width
          return (
            <TouchableOpacity
              key={index}
              testID={`button-${index}`}
              style={[
                styles.button,
                { width: Math.max(3*measuredWidth + 40, 60) }, // padding + min width
              ]}
              onPress={() => {
                // log click as an event
                RNApxorSDK.logAppEvent(`Button-${word}`);
              }}
            >
              <Text
                style={styles.text}
                onLayout={(e) => handleTextLayout(index, e)}
              >
                {word}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F0F8FF",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#3e7dc0",
    paddingVertical: 8,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "#333",
  },
});
