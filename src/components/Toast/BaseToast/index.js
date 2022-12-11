import React from 'react';

import {BaseToast} from 'react-native-toast-message';
import styles from './styles';

const BsToast = props => {
  return (
    <BaseToast
      {...props}
      style={styles.bsToast}
      text1Style={styles.text1Style}
    />
  );
};

export {BsToast};
