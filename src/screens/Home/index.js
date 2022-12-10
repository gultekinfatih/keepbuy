import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, Text, View} from 'react-native';

import {Header} from '../../components';
import {ProductCard} from '../../components';

import {connect} from 'react-redux';
import {
  firebaseFavoritesListener,
  requestAddFavoriteToFirebase,
  requestAllProducts,
} from '../../redux/actions/app';

import styles from './styles.js';

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(requestAllProducts());
  }, []);

  return app.loginLoading ? (
    <View style={{flex: 1}}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Header animatedValue={animatedValue} />

      <View style={styles.spaceForHeader} />
      <View style={styles.cardContainer}>
        <FlatList
          data={app.products.list}
          renderItem={({item}) => (
            <ProductCard
              product={item}
              navigation={props.navigation}
              favorites={app.favorites}
            />
          )}
          estimatedItemSize={200}
          numColumns={2}
        />
      </View>
    </View>
  );
});

export {Home};
