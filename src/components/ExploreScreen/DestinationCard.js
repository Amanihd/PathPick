import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DestinationCard = ({ destination, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={destination.image} style={styles.image} />
      <Text style={styles.name}>{destination.name}</Text>
      <Text style={styles.country}>{destination.country}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
  country: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default DestinationCard;
