import React, {useEffect} from 'react';
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

import {Loading} from '../../components/Loading';

import {AirbnbRating} from 'react-native-ratings';

import {FavoriteButton} from '../../components/FavoriteButton';

import Toast from 'react-native-toast-message';

import {connect} from 'react-redux';

import {
  requestAddProductToFirebase,
  requestAddFavoriteToFirebase,
  requestProductWithId,
  firebaseFavoritesListener,
} from '../../redux/actions/app';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const {productId} = props.route.params;

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    dispatch(requestProductWithId(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  // const filteredProducts = app.cart?.filter(p => p.id === productId);

  const sendfb = item => {
    if (false) {
      Toast.show({
        type: 'error',
        text1: 'Item already in cart!!',
      });
    } else {
      dispatch(requestAddProductToFirebase(item));
    }
  };

  useEffect(() => {
    dispatch(firebaseFavoritesListener());

    return () => {
      if (global.firebaseFavoriteenerOff) {
        global.firebaseFavoriteenerOff();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredFavorites = app.favorites?.filter(p => p.id === productId);

  const addFavorite = item => {
    if (filteredFavorites?.length > 0) {
      // eslint-disable-next-line no-alert
      Toast.show({
        type: 'error',
        text1: 'Item already in favorites!!',
      });
    } else {
      dispatch(requestAddFavoriteToFirebase(item));
    }
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

  return !app.product ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F0F0F3" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.scroolView}>
          <FlatList
            data={app.product.images ? app.product.images : null}
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
            {app.product.images
              ? app.product.images.map((data, index) => {
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
                      ]}
                    />
                  );
                })
              : null}
          </View>
        </View>
        <View style={styles.upperInfoContainer}>
          <View style={styles.upperInfo}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => sendfb(app.product)}>
                <Text style={styles.buttonText}>{'Add to cart'}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
              <View>
                <FavoriteButton
                  isFavorited={filteredFavorites?.length > 0 ? true : false}
                  handlePress={() => addFavorite(app.product)}
                />
              </View>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{app.product.title}</Text>
          </View>

          <Text style={styles.description}>{app.product.description}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>$ {app.product.price}.00</Text>
            <AirbnbRating
              count={5}
              defaultRating={app.product.rating}
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
