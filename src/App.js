import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from './screens';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export {App};
