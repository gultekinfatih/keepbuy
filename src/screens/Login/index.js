import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {loginUserWithFB, setApp} from '../../redux/actions';
import styles from './styles';

const mapStateToProps = states => ({app: states.app});

const mapDispatchToProps = dispatch => ({dispatch});

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {navigate} = props.navigation;
  const {dispatch, app} = props;

  return (
    <>
      <View style={styles.platform} />
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/keepbuy.png')}
          style={styles.image}
        />
        <Text style={styles.header}>KeepBuy(bye...)</Text>

        <Text style={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
            value={app.username}
            onChangeText={d => dispatch(setApp('username', d))}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="password"
            style={styles.input}
            value={app.password}
            onChangeText={d => dispatch(setApp('password', d))}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => dispatch(loginUserWithFB())}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text onPress={() => navigate('Register')} style={styles.signupButton}>
          New User
        </Text>
      </View>
    </>
  );
});

export {Login};
