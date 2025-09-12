// Screens/HorizontalScrollViewScreen.tsx
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function HorizontalScrollViews() {
  const navigation = useNavigation();

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

  // 🔹 Track navigation events
  useFocusEffect(
    React.useCallback(() => {
      console.log("📌 Screen focused: HorizontalScrollViews");
      return () => {
        console.log("📌 Screen blurred: HorizontalScrollViews");
      };
    }, [])
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      console.log("🔄 Navigation state changed on HorizontalScrollViews");
    });
    return unsubscribe;
  }, [navigation]);

  // 🔹 Handle scroll
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollX(event.nativeEvent.contentOffset.x);
  };

  return (
    <SafeAreaView
      style={styles.container}
      testID="HorizontalScrollViewsScreen" // ✅ test id
    >
      {/* Scrollable content */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} // hide default
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        onContentSizeChange={(w) => setContentWidth(w)}
        onLayout={(e) => setLayoutWidth(e.nativeEvent.layout.width)}
        scrollEventThrottle={16}
        testID="HorizontalScrollView" // ✅ test id
      >
        {items.map((item) => (
          <View key={item.id} style={styles.card} testID={`Card-${item.id}`}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Custom scrollbar */}
      <View style={styles.scrollBarTrack} testID="CustomScrollBarTrack">
        <View
          style={[
            styles.scrollBarThumb,
            (() => {
              const thumbWidth = (layoutWidth / contentWidth) * layoutWidth;
              const scrollableWidth = contentWidth - layoutWidth;
              const thumbTranslateRange = layoutWidth - thumbWidth;

              return {
                width: thumbWidth,
                transform: [
                  {
                    translateX:
                      scrollableWidth > 0
                        ? (scrollX / scrollableWidth) * thumbTranslateRange
                        : 0,
                  },
                ],
              };
            })(),
          ]}
          testID="CustomScrollBarThumb"
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
    backgroundColor: "#ff4444",
    borderRadius: 3,
  },
});
