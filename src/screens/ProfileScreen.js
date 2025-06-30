import {  StyleSheet, ScrollView } from "react-native";
import UserProfileCard from "../components/ProfileScreen/UserProfileCard";
import Footer from "../components/ProfileScreen/Footer";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UserProfileCard name="Amani Hamad" email="amani.hamad2017@gmail.com" />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f6fc",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
});
