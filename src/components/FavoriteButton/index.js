import React from 'react';
import {TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../utils/color';

import styles from './styles';

const FavoriteButton = ({handlePress, isFavorited}) => {
  let favoriteColor = isFavorited ? Colors.tertiary : Colors.gray;
  return (
    <TouchableOpacity onPress={handlePress}>
      <Entypo color={favoriteColor} name="heart" style={styles.favoriteIcon} />
    </TouchableOpacity>
  );
};

export {FavoriteButton};
