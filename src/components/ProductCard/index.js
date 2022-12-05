import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const ProductCard = ({product, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('ProductDetail', {productID: product.id})
      }>
      <View style={styles.discountContainer}>
        <View style={styles.discount}>
          <Text style={styles.discountText}>
            {product.discountPercentage.toFixed()}%
          </Text>
        </View>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
      </View>
      <Text style={styles.productName}>{product.title}</Text>

      <Text style={styles.title}>{product.productName}</Text>
      <Text>$ {product.price}</Text>
    </TouchableOpacity>
  );
};

export {ProductCard};
