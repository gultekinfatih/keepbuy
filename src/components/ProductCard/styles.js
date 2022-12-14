import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';
import {H, W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  card: {
    width: W(44),
    margin: W(1),
    marginBottom: W(5),
    backgroundColor: '#F0F0F3',
    borderRadius: 10,
  },
  discountContainer: {
    width: '100%',
    height: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  discount: {
    position: 'absolute',
    width: '16%',
    height: '16%',
    backgroundColor: Colors.primary,
    top: 4,
    left: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  favorite: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  discountText: {
    fontSize: 10,
    flex: 1,
    color: Colors.white,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 8,
    zIndex: 0,
  },
  productName: {
    fontSize: 12,
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 4,
  },
  priceAndRating: {
    height: 70,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  available: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availableIcon: {
    fontSize: 12,
    marginRight: 6,
    color: Colors.primary,
  },
  availableText: {
    fontSize: 12,
    color: Colors.primary,
  },
});

export default styles;
