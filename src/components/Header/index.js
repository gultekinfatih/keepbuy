import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {logoutUserWithFB} from '../../redux/actions';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});

const mapDispatchToProps = dispatch => ({dispatch});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {dispatch} = props;

  const handleLogout = () => {
    dispatch(logoutUserWithFB());
    console.log('logouttt');
  };
  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/images/search.png')}
              style={[styles.icon16, {marginLeft: 8}]}
            />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              style={styles.searchInput}
              onChangeText={props.onSearch}
            />
          </View>

          <Image
            source={require('../../assets/images/bell.png')}
            style={styles.bell}
          />
          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={require('../../assets/images/deposit-circle.png')}
              style={styles.icon32}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
});

export {Header};
