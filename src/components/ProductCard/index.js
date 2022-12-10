import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {FavoriteButton} from '../index';

import {AirbnbRating} from 'react-native-ratings';

import {connect} from 'react-redux';
import {requestAddFavoriteToFirebase} from '../../redux/actions';

import styles from './styles';

const mapDispatchToProps = dispatch => ({dispatch});

const ProductCard = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;

  const filteredFavorites = props.favorites?.filter(
    p => p.id === props.product.id,
  );

  const addFavorite = item => {
    if (filteredFavorites?.length > 0) {
      // eslint-disable-next-line no-alert
      alert('Item already in favorite!!');
    } else {
      dispatch(requestAddFavoriteToFirebase(item));
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        props.navigation.navigate('ProductDetail', {
          productId: props.product.id,
        })
      }>
      <View style={styles.discountContainer}>
        <View style={styles.discount}>
          <Text style={styles.discountText}>
            {props.product.discountPercentage.toFixed()}%
          </Text>
        </View>
        <View style={styles.favorite}>
          <FavoriteButton
            isFavorited={filteredFavorites?.length > 0 ? true : false}
            handlePress={() => addFavorite(props.product)}
          />
        </View>
        <Image source={{uri: props.product.thumbnail}} style={styles.image} />
      </View>
      <View style={styles.priceAndRating}>
        <Text style={styles.productName}>{props.product.title}</Text>
        <View style={styles.price}>
          <Text>$ {props.product.price}</Text>
          <AirbnbRating
            defaultRating={props.product.rating}
            size={10}
            showRating={false}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export {ProductCard};
