import React from 'react';

import {ErrorToast} from 'react-native-toast-message';
import styles from './styles';

const ErrToast = props => {
  return (
    <ErrorToast
      {...props}
      style={styles.errorToast}
      text1Style={styles.text1Style}
    />
  );
};

export {ErrToast};
