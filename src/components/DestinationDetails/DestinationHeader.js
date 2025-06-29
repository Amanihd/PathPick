import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DestinationHeader = ({ image, isFavorite, onToggleFavorite, onBack }) => {
  return (
    <>
      <Image source={image} style={styles.image} />
    
      <TouchableOpacity style={styles.backIcon} onPress={onBack}>
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>

   
      <TouchableOpacity style={styles.favoriteIcon} onPress={onToggleFavorite}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={28}
          color={isFavorite ? 'red' : 'white'}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 320,
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    padding: 6,
    zIndex: 2,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    padding: 6,
    zIndex: 2,
  },
});

export default DestinationHeader;
