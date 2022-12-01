import React from 'react';
import {Text, View, Image, TextInput, Platform} from 'react-native';

const Register = props => {
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
          backgroundColor: '#FFF',
          height: '100%',
        }}>
        <Image
          source={require('../../assets/images/keepbuy.png')}
          style={{width: '100%', height: '33%', resizeMode: 'contain'}}
        />
        <Text
          style={{
            fontSize: 30,
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
            placeholderTextColor="#7ECA9C"
            style={{paddingHorizontal: 10, paddingVertical: '1.5%'}}
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
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#7ECA9C"
            style={{paddingHorizontal: 10, paddingVertical: '1.5%'}}
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
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#7ECA9C"
            style={{paddingHorizontal: 10, paddingVertical: '1.5%'}}
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
            style={{
              color: 'white',
            }}>
            Register
          </Text>
        </View>
        <Text
          onPress={() => props.navigation.navigate('Login')}
          style={{
            alignSelf: 'center',
            color: '#2D4059',
            paddingVertical: 30,
          }}>
          Login
        </Text>
      </View>
    </>
  );
};

export {Register};
