import {StyleSheet} from 'react-native';
import {H, W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  card: {
    width: W(44),
    margin: W(1),
    marginBottom: W(5),
  },
  discountContainer: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#F0F0F3',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  discount: {
    position: 'absolute',
    width: '16%',
    height: '16%',
    backgroundColor: '#00AC76',
    top: 4,
    left: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  discountText: {
    fontSize: 10,
    flex: 1,
    color: '#ffffff',
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
    color: '#000000',
    fontWeight: '600',
    marginBottom: 2,
  },
  available: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availableIcon: {
    fontSize: 12,
    marginRight: 6,
    color: '#00AC76',
  },
  notAvailableIcon: {
    fontSize: 12,
    marginRight: 6,
    color: '#C04345',
  },
  availableText: {
    fontSize: 12,
    color: '#00AC76',
  },
  notAvailableText: {
    fontSize: 12,
    color: '#C04345',
  },
});

export default styles;
