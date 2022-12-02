import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Register} from '../../screens';

const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export {RegisterStack};
