import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {AirbnbRating} from 'react-native-ratings';

import styles from './styles';

const ProductCard = ({product, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', {product})}>
      <View style={styles.discountContainer}>
        <View style={styles.discount}>
          <Text style={styles.discountText}>
            {product.discountPercentage.toFixed()}%
          </Text>
        </View>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
      </View>
      <View style={styles.priceAndRating}>
        <Text style={styles.productName}>{product.title}</Text>
        <View style={styles.price}>
          <Text>$ {product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {ProductCard};
