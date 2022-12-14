import React, {useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

import {Loading} from '../../components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {DeleteButton} from '../../components/DeleteButton';

import Toast from 'react-native-toast-message';

import {connect} from 'react-redux';

import {
  firebaseProductsListener,
  requestRemoveProductFromFirebase,
  requestUpdateProductToFirebase,
  requestRemoveCartFromFirebase,
} from '../../redux/actions/app';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  useEffect(() => {
    dispatch(firebaseProductsListener());
    return () => {
      if (global.firebaseProductsListenerOff) {
        global.firebaseProductsListenerOff();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useMemo
  const getTotal = useMemo(
    () =>
      app.cart
        ?.map(item => {
          return item.price * item.quantity;
        })
        .reduce((currentTotal, price) => currentTotal + price, 0),
    [app.cart],
  );

  const checkOut = () => {
    Toast.show({
      type: 'success',
      text1: 'Items will be Deliverd Soon!!',
    });

    props.navigation.navigate('Home');
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

        <View style={styles.productInfo}>
          <View>
            <Text style={styles.productTitle}>{item.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </View>

          <View style={styles.productButtons}>
            <View style={styles.numberOfProducts}>
              <TouchableOpacity
                style={item.quantity === 1 ? styles.isOne : styles.minusButton}
                disabled={item.quantity === 1 ? true : false}
                onPress={() => {
                  dispatch(
                    requestUpdateProductToFirebase(
                      item.value,
                      item.quantity - 1,
                    ),
                  );
                  dispatch(firebaseProductsListener());
                }}>
                <MaterialCommunityIcons
                  name="minus"
                  style={styles.materialIcon}
                />
              </TouchableOpacity>

              <Text>{item.quantity}</Text>

              <TouchableOpacity
                style={styles.plusButton}
                onPress={() => {
                  dispatch(
                    requestUpdateProductToFirebase(
                      item.value,
                      item.quantity + 1,
                    ),
                  );
                  dispatch(firebaseProductsListener());
                }}>
                <MaterialCommunityIcons
                  name="plus"
                  style={styles.materialIcon}
                />
              </TouchableOpacity>
            </View>
            <DeleteButton
              handlePress={() =>
                dispatch(requestRemoveProductFromFirebase(item.key, item.value))
              }
            />
          </View>
        </View>
      </View>
    );
  };

  return app.loginLoading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.secondaryTitle}>My Cart</Text>
          {app.cart?.length > 0 ? (
            <TouchableOpacity
              onPress={() => dispatch(requestRemoveCartFromFirebase())}>
              <Text style={styles.removeTitle}>Clear Cart</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <FlatList
          data={app.cart}
          ListEmptyComponent={<Text>There is no product in your cart</Text>}
          renderItem={renderProducts}
          keyExtractor={item => `${item.id} ${item.key}`}
          paddingHorizontal={16}
        />
      </View>

      {getTotal > 0 ? (
        <View style={styles.checkoutContainer}>
          <TouchableOpacity
            onPress={() => checkOut()}
            style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>
              CHECKOUT (${getTotal})
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
});

export {Cart};
