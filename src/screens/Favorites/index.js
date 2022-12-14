import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

import {DeleteButton} from '../../components/DeleteButton';

import Toast from 'react-native-toast-message';

import {connect} from 'react-redux';
import {
  firebaseFavoritesListener,
  requestRemoveFavoriteFromFirebase,
  requestAddProductToFirebase,
} from '../../redux/actions/app';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  useEffect(() => {
    dispatch(firebaseFavoritesListener());

    return () => {
      if (global.firebaseFavoriteenerOff) {
        global.firebaseFavoriteenerOff();
      }
    };
  }, [dispatch]);

  const sendfb = item => {
    const filteredProducts = app.cart?.filter(p => p.id === item.id);

    if (filteredProducts?.length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Item already in cart!!',
      });
    } else {
      dispatch(requestAddProductToFirebase(item));
    }
  };

  const renderProducts = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            props.navigation.navigate('ProductDetail', {productId: item.id})
          }>
          <Image source={{uri: item.thumbnail}} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.productInfoContainer}>
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <DeleteButton
              handlePress={() =>
                dispatch(
                  requestRemoveFavoriteFromFirebase(item.key, item.value),
                )
              }
            />
          </View>

          <View style={styles.productButtons}>
            <TouchableOpacity
              style={styles.addToCart}
              onPress={() => sendfb(item)}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>

            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.secondaryTitle}>Favorites</Text>
        <FlatList
          data={app.favorites}
          ListEmptyComponent={
            <Text>There is no product in your favorites</Text>
          }
          renderItem={renderProducts}
          keyExtractor={item => `${item.id} ${item.key}`}
          paddingHorizontal={16}
        />
      </View>
    </View>
  );
});

export {Favorites};
