import React, { useContext } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import DestinationCard from "../components/ExploreScreen/DestinationCard";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesScreen = ({ navigation }) => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationCard
            destination={item}
            onPress={() =>
              navigation.navigate("DestinationDetails", { destination: item })
            }
          />
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6fc",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     backgroundColor: "#f2f6fc",
  },
  emptyText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
});

export default FavoritesScreen;
