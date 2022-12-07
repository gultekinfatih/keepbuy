import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';

import {
  requestAddProductToFirebase,
  firebaseProductsListener,
  firebaseFavoritesListener,
  requestAddFavoriteToFirebase,
} from '../../redux/actions/app';

import {AirbnbRating} from 'react-native-ratings';

import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const {product} = props.route.params;

  const [favorite, setFavorite] = useState(true);

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    //dispatch(requestGetAllPRoductsFromFirebase());
    dispatch(firebaseProductsListener());
    dispatch(firebaseFavoritesListener());

    return () => {
      if (global.firebaseProductsListenerOff) {
        global.firebaseProductsListenerOff();
      }
      if (global.firebaseFavoritesListenerOff) {
        global.firebaseFavoritesListenerOff();
      }
    };
  }, []);

  const sendfb = item => {
    const filteredProducts = app.fbProducts?.filter(
      p => p.brand === item.brand,
    );
    console.log('filteredProducts', filteredProducts);
    if (filteredProducts?.length > 0) {
      alert('Item already in cart!!');
    } else {
      dispatch(requestAddProductToFirebase(item));
    }
  };

  const addFavorite = item => {
    dispatch(requestAddFavoriteToFirebase(item));
  };

  const removeFavorite = item => {
    console.log('REMOVE ITEM =>');
  };

  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <View
        style={[
          styles.singleImageContainer,
          {
            width: width,
          },
        ]}>
        <Image source={{uri: item}} style={styles.singleImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F0F0F3" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.scroolView}>
          <FlatList
            data={product.images ? product.images : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View style={styles.imagesContainer}>
            {product.images
              ? product.images.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={[
                        styles.images,
                        {
                          opacity,
                        },
                      ]}></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View style={styles.upperInfo}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 40,
            }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => sendfb(product)}>
                <Text style={styles.buttonText}>{'Add to cart'}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
              <View>
                {!favorite ? (
                  <TouchableOpacity onPress={() => removeFavorite(product)}>
                    <Entypo name="heart" style={styles.favoriteIcon} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => addFavorite(product)}>
                    <Entypo
                      color="red"
                      name="heart"
                      style={styles.favoriteIcon}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{product.title}</Text>
          </View>

          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>$ {product.price}.00</Text>
            <AirbnbRating
              count={5}
              defaultRating={product.rating}
              size={15}
              showRating={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

export {ProductDetail};
