// FlipCards.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    width: 200,
    height: 300,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardInner: {
    flex: 1,
    transform: [{ rotateY: '0deg' }],
    backfaceVisibility: 'hidden',
    padding: 10,
  },
  cardFlipped: {
    transform: [{ rotateY: '180deg' }],
  },
  cardFront: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  cardBack: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    flex: 1,
    transform: [{ rotateY: '180deg' }],
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
