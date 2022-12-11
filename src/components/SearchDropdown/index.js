import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {connect} from 'react-redux';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const SearchDropDown = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {dataSource} = props;

  const handlePress = item => {
    props.navigation.navigate('ProductDetail', {
      productId: item.id,
    });
    props.setSearching(false);
  };
  return (
    <ScrollView onPress={props.onPress} style={styles.container}>
      <View style={styles.subContainer}>
        {dataSource.length ? (
          dataSource.map(item => {
            return (
              <View style={styles.itemView} key={`${item.id} searchItemId`}>
                <Text style={styles.itemText} onPress={() => handlePress(item)}>
                  {item.title}
                </Text>
              </View>
            );
          })
        ) : (
          <View style={styles.noResultView}>
            <Text style={styles.noResultText}>No search items matched</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
});

export {SearchDropDown};
