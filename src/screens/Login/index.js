import React from 'react';
import {Text, View, Image, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {createUserWithFB, loginUserWithFB, setApp} from '../../redux/actions';

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
      <View
        style={{
          height: Platform.OS === 'ios' ? 40 : 20,
          backgroundColor: '#FFF',
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          height: '100%',
        }}>
        <Image
          source={require('../../assets/images/keepbuy.png')}
          style={{
            width: '100%',
            height: '43%',
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
          }}>
          Save the world
        </Text>

        <Text
          style={{
            marginHorizontal: 55,
            textAlign: 'center',
            marginTop: 5,
            opacity: 0.4,
          }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: '#7ECA9C',
            borderRadius: 23,
            paddingVertical: 2,
          }}>
          <TextInput
            placeholder="Email"
            style={{paddingHorizontal: 10}}
            value={app.username}
            onChangeText={d => dispatch(setApp('username', d))}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#7ECA9C',
            borderRadius: 23,
            paddingVertical: 2,
          }}>
          <TextInput
            placeholder="password"
            style={{paddingHorizontal: 10}}
            value={app.password}
            onChangeText={d => dispatch(setApp('password', d))}
          />
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#7ECA9C',
            paddingVertical: 10,
            borderRadius: 23,
          }}>
          <Text
            onPress={() => dispatch(loginUserWithFB())}
            style={{
              color: 'white',
            }}>
            Already a member
          </Text>
        </View>
        <Text
          onPress={() => navigate('Register')}
          style={{
            alignSelf: 'center',
            color: '#2D4059',
            paddingVertical: 20,
          }}>
          New User
        </Text>
      </View>
    </>
  );
});

export {Login};
