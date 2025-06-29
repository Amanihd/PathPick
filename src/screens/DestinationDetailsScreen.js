import React, { useContext } from "react";
import { View } from "react-native";
import DestinationHeader from "../components/DestinationDetails/DestinationHeader";
import DestinationInfo from "../components/DestinationDetails/DestinationInfo";
import { FavoritesContext } from "../context/FavoritesContext";
import { useNavigation } from "@react-navigation/native";

const DestinationDetailsScreen = ({ route }) => {
  const { destination } = route.params;
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);
  const navigation = useNavigation();

  const favorite = isFavorite(destination.id);

  const toggleFavorite = () => {
    if (favorite) removeFavorite(destination.id);
    else addFavorite(destination);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DestinationHeader
        image={destination.image}
        isFavorite={favorite}
        onToggleFavorite={toggleFavorite}
        onBack={() => navigation.goBack()}
      />
      <DestinationInfo
        name={destination.name}
        country={destination.country}
        description={destination.description}
      />
    </View>
  );
};

export default DestinationDetailsScreen;
