import React from 'react';
import {connect} from 'react-redux';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

import {Home, Favorites, Cart} from '../../screens';

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const MainStack = connect(mapDispatchToProps)(props => {
  return (
    <Tab.Navigator activeColor="#ff6600" barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Products"
        component={Home}
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
