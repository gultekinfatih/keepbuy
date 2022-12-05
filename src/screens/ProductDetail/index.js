import React from 'react';
import {Text, View} from 'react-native';

const ProductDetail = ({route, navigation}) => {
  const {productID} = route.params;
  console.log('PRODUCT ID', productID);

  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  );
};

export {ProductDetail};
