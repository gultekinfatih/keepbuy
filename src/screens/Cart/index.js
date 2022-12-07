import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  FlatList,
} from 'react-native';

import {connect} from 'react-redux';

import {
  firebaseProductsListener,
  requestRemoProductFromFirebase,
} from '../../redux/actions/app';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  const [total, setTotal] = useState(null);

  useEffect(() => {
    //dispatch(requestGetAllPRoductsFromFirebase());
    dispatch(firebaseProductsListener());

    return () => {
      if (global.firebaseProductsListenerOff) {
        global.firebaseProductsListenerOff();
      }
    };
  }, []);

  //get total price of all items in the cart
  // const getTotal = productData => {
  //   let totalPrice = 0;
  //   for (let index = 0; index < productData.length; index++) {
  //     let price = productData[index].price;
  //     totalPrice = totalPrice + price;
  //   }
  //   setTotal(total);
  // };

  const checkOut = async () => {
    try {
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    props.navigation.navigate('Home');
  };

  const renderProducts = ({item}) => {
    return (
      <View
        onPress={() => props.navigation.navigate('ProductDetail', {})}
        style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.thumbnail}} style={styles.image} />
        </View>

        <View style={styles.productInfo}>
          <View>
            <Text style={styles.productTitle}>{item.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </View>

          <View style={styles.productButtons}>
            <View style={styles.numberOfProducts}>
              <TouchableOpacity style={styles.minusButton}>
                <MaterialCommunityIcons
                  name="minus"
                  style={styles.materialIcon}
                />
              </TouchableOpacity>

              <Text>1</Text>

              <TouchableOpacity style={styles.plusButton}>
                <MaterialCommunityIcons
                  name="plus"
                  style={styles.materialIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() =>
                dispatch(requestRemoProductFromFirebase(item.key, item.value))
              }>
              <MaterialCommunityIcons
                name="delete-outline"
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.secondaryTitle}>My Cart</Text>
          {app.cart?.length > 0 ? (
            <TouchableOpacity
              onPress={() => dispatch(requestRemoProductFromFirebase())}>
              <Text style={styles.removeTitle}>Clear Cart</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <FlatList
          data={app.cart}
          ListEmptyComponent={<Text>There is no product in your cart</Text>}
          renderItem={renderProducts}
          keyExtractor={item => item.id}
          paddingHorizontal={16}
        />
      </View>

      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          onPress={() => (total !== 0 ? checkOut() : null)}
          style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>
            CHECKOUT (${total + total / 20})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export {Cart};
