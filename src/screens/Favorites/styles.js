import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    position: 'relative',
    paddingBottom: '15%',
  },
  secondaryTitle: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  addToCart: {
    width: '50%',
    height: '70%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  productContainer: {
    width: '100%',
    height: 100,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: '30%',
    height: 100,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F3',
    borderRadius: 10,
    marginRight: 22,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productInfoContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 14,
    maxWidth: '100%',
    color: Colors.black,
    fontWeight: '600',
    letterSpacing: 1,
  },
  priceContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '85%',
    marginRight: 9,
  },
  productButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteIcon: {
    fontSize: 16,
    color: Colors.white,
    backgroundColor: Colors.tertiary,
    padding: 8,
    borderRadius: 100,
  },
});

export default styles;
