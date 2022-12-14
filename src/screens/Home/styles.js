import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';
import {W} from '../../utils/ui/dimensions';

const LOWER_HEADER_HEIGHT = 46;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  spaceForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  cardContainer: {
    flex: 1,
    padding: W(4),
  },
  loading: {
    flex: 1,
  },
});

export default styles;
