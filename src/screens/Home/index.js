import React, {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, Text, View} from 'react-native';

import {Header, ProductCard, SearchDropDown} from '../../components';

import {connect} from 'react-redux';
import {
  requestAllProducts,
  firebaseFavoritesListener,
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

  const [filtered, setFiltered] = useState(app.products?.list);
  const [searching, setSearching] = useState(false);

  const onSearch = text => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = app.products?.list?.filter(item => {
        if (item.title.toLowerCase().match(temp)) return item.title;
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(app.products?.list);
    }
  };

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(requestAllProducts());
  }, []);

  useEffect(() => {
    //dispatch(requestGetAllPRoductsFromFirebase());
    dispatch(firebaseFavoritesListener());

    return () => {
      if (global.firebaseFavoriteenerOff) {
        global.firebaseFavoriteenerOff();
      }
    };
  }, [dispatch]);

  return app.loginLoading ? (
    <View style={{flex: 1}}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <>
      <View style={styles.container}>
        <Header animatedValue={animatedValue} onSearch={onSearch} />
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
      {searching && (
        <SearchDropDown
          onPress={() => setSearching(false)}
          dataSource={filtered}
          navigation={props.navigation}
          setSearching={setSearching}
        />
      )}
    </>
  );
});

export {Home};
