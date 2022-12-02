import * as React from 'react';
import {View} from 'react-native';

import {Navigation} from './navigation';

import {Provider} from 'react-redux';
import store from './redux';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

export {App};
