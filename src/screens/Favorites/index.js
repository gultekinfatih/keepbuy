import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

import {DeleteButton} from '../../components/DeleteButton';

import {connect} from 'react-redux';
import {
  firebaseFavoritesListener,
  requestRemoveFavoriteFromFirebase,
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
    //dispatch(requestGetAllPRoductsFromFirebase());
    dispatch(firebaseFavoritesListener());

    return () => {
      if (global.firebaseFavoriteenerOff) {
        global.firebaseFavoriteenerOff();
      }
    };
  }, [dispatch]);

  console.log('FAVORITES =>', app.favorites);

  const renderProducts = ({item}) => {
    return (
      <View
        onPress={() => props.navigation.navigate('ProductDetail', {})}
        style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.thumbnail}} style={styles.image} />
        </View>

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
            <TouchableOpacity style={styles.addToCart}>
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
          keyExtractor={item => item.id}
          paddingHorizontal={16}
        />
      </View>
    </View>
  );
});

export {Favorites};
