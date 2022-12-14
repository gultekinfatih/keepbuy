import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    position: 'relative',
  },
  scroolView: {
    width: '100%',
    backgroundColor: '#F0F0F3',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  imagesContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 32,
  },
  images: {
    width: '16%',
    height: 2.4,
    backgroundColor: Colors.black,
    marginHorizontal: 4,
    borderRadius: 100,
  },
  singleImageContainer: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  upperInfoContainer: {
    paddingHorizontal: 16,
    marginTop: 6,
  },
  upperInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginVertical: 4,
    color: Colors.black,
    maxWidth: '84%',
  },
  description: {
    fontSize: 12,
    color: Colors.black,
    fontWeight: '400',
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: '85%',
    maxHeight: 44,
    marginBottom: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    maxWidth: '85%',
    color: Colors.black,
    marginBottom: 4,
  },
  buttonContainer: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
