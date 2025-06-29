import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoutButton from "./LogoutButton";

const UserProfileCard = ({ name, email, onLogout }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Ionicons name="person-circle" size={120} color="#4169E1" />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      <LogoutButton onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: "center",
    shadowColor: "#4169E1",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  imageContainer: {
    marginBottom: 25,
    borderRadius: 100,
    overflow: "hidden",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },
  email: {
    fontSize: 16,
    fontWeight: "400",
    color: "#666",
    marginBottom: 30,
  },
});

export default UserProfileCard;
