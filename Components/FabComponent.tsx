import React from "react";
import { Dimensions, StyleSheet , View} from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const FabComponent = () => {
  // current position
  const posX = useSharedValue(SCREEN_WIDTH - 80);
  const posY = useSharedValue(SCREEN_HEIGHT - 150);

  // offset at the start of gesture
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const dragGesture = Gesture.Pan()
    .onStart(() => {
      // store current position as offset
      offsetX.value = posX.value;
      offsetY.value = posY.value;
    })
    .onUpdate((event) => {
      let newX = offsetX.value + event.translationX;
      let newY = offsetY.value + event.translationY;

      // clamp within screen bounds
      newX = Math.max(0, Math.min(SCREEN_WIDTH - 60, newX));
      newY = Math.max(0, Math.min(SCREEN_HEIGHT - 60, newY));

      posX.value = newX;
      posY.value = newY;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: posX.value,
    top: posY.value,
  }));

  return (
    <GestureDetector gesture={dragGesture}>
      <Animated.View style={[styles.fabContainer, animatedStyle]}>
         <View style={styles.fabWrapper}>
      <FAB icon="plus" onPress={() => console.log("FAB Pressed")} style={styles.fab} />
      {/* Inner circle to create a "hole" */}
      {/* <View style={styles.hole} /> */}
    </View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    zIndex: 1000,
  },
  
  fabWrapper: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 22,
    backgroundColor: "#e43855ff",
  },
  hole: {
    position: "absolute",
    width: 20, // size of the hole
    height: 20,
    borderRadius: 10,
    backgroundColor: "white", // same as screen background
  },
});

export default FabComponent;
