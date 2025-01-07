// CardContainer.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    maxWidth: '90%',
    width: '100%',
  },
  card: {
    width: '44%',
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#848884',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInner: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFront: {
    backgroundColor: '#f1f1f1',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
    zIndex: 2,
  },
  cardBack: {
    backgroundColor: '#fcb852',
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotateY: '180deg' }],
    borderRadius: 10,
    zIndex: 1,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;

