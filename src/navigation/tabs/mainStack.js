import React from 'react';
import {connect} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home, Favorites, Cart, ProductDetail} from '../../screens';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = connect(mapDispatchToProps)(props => {
  return (
    <Tab.Navigator activeColor="#00AC76" barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Products"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerRight: () => <MaterialCommunityIcons name="home" size={26} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
          headerRight: () => <MaterialCommunityIcons name="heart" size={26} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
          headerRight: () => <MaterialCommunityIcons name="cart" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
});

export {MainStack};
