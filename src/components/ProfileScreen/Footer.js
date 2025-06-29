
import { View, Text, StyleSheet } from "react-native";


const Footer = () => {
 
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2025 PathPick App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 30,
    alignItems: "center",
    marginTop: 200, 
  },
  footerText: {
    color: "#888", 
    fontSize: 14,
  },
});

export default Footer;
