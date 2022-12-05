import {StyleSheet} from 'react-native';
import {W} from '../../utils/ui/dimensions';

const LOWER_HEADER_HEIGHT = 46;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  spaceForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  cardContainer: {
    flex: 1,
    padding: W(4),
  },
});

export default styles;
