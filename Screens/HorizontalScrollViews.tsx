// Screens/HorizontalScrollViewScreen.tsx
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

export function HorizontalScrollViews() {
  const items = [
    { id: "1", name: "Text-1" },
    { id: "2", name: "Text-2" },
    { id: "3", name: "Text-3" },
    { id: "4", name: "Text-4" },
    { id: "5", name: "Text-5" },
    { id: "6", name: "Text-6" },
  ];

  const [scrollX, setScrollX] = useState(0);
  const [contentWidth, setContentWidth] = useState(1);
  const [layoutWidth, setLayoutWidth] = useState(1);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollX(event.nativeEvent.contentOffset.x);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Scrollable content */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} // hide default
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        onContentSizeChange={(w) => setContentWidth(w)}
        onLayout={(e) => setLayoutWidth(e.nativeEvent.layout.width)}
        scrollEventThrottle={16}
      >
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Custom scrollbar */}
      <View style={styles.scrollBarTrack}>
        <View
          style={[
            styles.scrollBarThumb,
            {
              width: (layoutWidth / contentWidth) * layoutWidth, // proportional thumb
              transform: [
                {
                  translateX:
                    (scrollX / contentWidth) * layoutWidth,
                },
              ],
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090a0aff",
    justifyContent: "center",
  },
  scrollContent: {
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 100,
  },
  card: {
    backgroundColor: "#3a1994ff",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginRight: 15,
    alignItems: "center",
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b48585ff",
  },
  scrollBarTrack: {
    height: 6,
    backgroundColor: "#ccc",
    borderRadius: 3,
    marginHorizontal: 16,
    marginTop: 10,
    overflow: "hidden",
  },
  scrollBarThumb: {
    height: 6,
    backgroundColor: "#ff4444", // 👈 visible color for scrollbar
    borderRadius: 3,
  },
});
