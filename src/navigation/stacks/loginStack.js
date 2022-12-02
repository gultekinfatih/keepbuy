import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../../screens';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export {LoginStack};
