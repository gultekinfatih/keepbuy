import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Header} from '../../components';
import {ProductCard} from '../../components';
import {requestAllProducts} from '../../redux/actions/app';

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
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    props.dispatch(requestAllProducts());
  }, []);

  return props.app.loginLoading ? (
    <View style={{flex: 1}}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Header animatedValue={animatedValue} />

      <View style={styles.spaceForHeader} />
      <View style={styles.cardContainer}>
        <FlatList
          data={props.app.products.list}
          renderItem={({item}) => (
            <ProductCard product={item} navigation={props.navigation} />
          )}
          estimatedItemSize={200}
          numColumns={2}
        />
      </View>
    </View>
  );
});

export {Home};
