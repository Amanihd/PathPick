import { View, Text, StyleSheet } from 'react-native';

const DestinationInfo = ({ name, country, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 25,
    flex: 1,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  country: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DestinationInfo;
