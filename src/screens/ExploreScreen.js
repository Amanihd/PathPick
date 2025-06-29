import { View, FlatList } from "react-native";
import destinations from "../data/destinations";
import DestinationCard from '../components/ExploreScreen/DestinationCard';

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f2f6fc" }}>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationCard
            destination={item}
            onPress={() =>
              navigation.navigate("DestinationDetails", { destination: item })
            }
          />
        )}
      />
    </View>
  );
};

export default ExploreScreen;
