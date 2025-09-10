
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export function ListView() {
  const [modalVisible, setModalVisible] = useState(true);

  const data = [
    { id: "1", name: "Jennifer", image: "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?cs=srgb&dl=pexels-pixabay-50577.jpg&fm=jpg" },
    { id: "2", name: "Michael", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXhtdddYGmdbTHZ4YsmOp8lw2pS46M51sDw&s" },
    { id: "3", name: "Sophia", image: "https://images.wsj.net/im-140539/?width=1280&size=1" },
    { id: "4", name: "David", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbVF3ccfihAW5yOWlkN0Q7SVEtwsUhJ88Gix2W3xzBTya5YPDfwqHI1K_OsPPsHG5wWY&usqp=CAU" },
    { id: "5", name: "Emma", image: "https://i.pinimg.com/236x/3e/7c/6f/3e7c6feab1a29f9f0cdeec00baef0a85.jpg" },
  ];

  const renderItem = ({ item }: { item: { id: string; name: string; image: string } }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      
      {/* Bottom Row (Like + Share) */}
      <View style={styles.bot}>
        <Text style={styles.name}>Like {item.id}</Text>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="share" size={20} color="#3e7dc0" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modalContainer}>
       

        {/* Horizontal RecyclerView */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  card: {
    width: 140,
    backgroundColor: "#fceeee",
    margin: 8,
    borderRadius: 12,
    alignItems: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginRight: 8,
  },
  bot: {
    flexDirection: "row", // 👈 side by side
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  iconButton: {
    padding: 6,
    backgroundColor: "#e6f0ff",
    borderRadius: 20,
  },
});
