import * as React from 'react';

import {View} from 'react-native';

import Toast from 'react-native-toast-message';
import {ErrToast, BsToast} from './components';

import {Navigation} from './navigation';

import {Provider} from 'react-redux';
import store from './redux';
import styles from './styles';

const toastConfig = {
  success: props => <BsToast {...props} />,

  error: props => <ErrToast {...props} />,
};

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
      <Toast config={toastConfig} />
    </View>
  );
};

export {App};
