import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { WebView } from "react-native-webview";

export function WebViewScreen() {
  const defaultUrl = "https://www.flipkart.com";
  const [url, setUrl] = useState(defaultUrl);
  const [inputUrl, setInputUrl] = useState("");

  // Your custom HTML string
  const customHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Custom View</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding: 20px; }
          h1 { color: #4682B4; }
          button {
            background: #4682B4; color: white; padding: 10px 20px;
            border: none; border-radius: 8px; font-size: 16px;
          }
        </style>
      </head>
      <body>
        <h1>Default HTML WebView </h1>
        <p>This is a static HTML page inside WebView.</p>
          </body>
    </html>
  `;

  const loadSite = () => {
    if (inputUrl === "d") {
      setUrl("html-view"); // special flag for HTML
      setInputUrl("");
      return;
    }

    if (!inputUrl) return;

    let finalUrl = inputUrl.startsWith("http")
      ? inputUrl
      : "https://" + inputUrl;
    setUrl(finalUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* WebView */}
      <View style={styles.webviewContainer}>
        {url === "html-view" ? (
          <WebView source={{ html: customHTML }} />
        ) : (
          <WebView source={{ uri: url }} />
        )}
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          placeholder='Enter URL (e.g. "amazon.in" or just type "d")'
          value={inputUrl}
          onChangeText={setInputUrl}
        />

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btn} onPress={loadSite}>
            <Text style={styles.btnText}>setWebView</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setUrl("https://www.amazon.in");
              setInputUrl("");
            }}
          >
            <Text style={styles.btnText}>Amazon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webviewContainer: { flex: 1 },
  controls: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#666",
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 12,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    backgroundColor: "#4682B4",
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 8,
  },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
