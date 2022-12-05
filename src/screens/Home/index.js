import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import styles from './styles.js';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export {Home};
