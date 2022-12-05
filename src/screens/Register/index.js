import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from './styles';

const Register = props => {
  const {navigate} = props.navigation;
  return (
    <>
      <View style={styles.platform} />

      <View style={styles.container}>
        <Image
          source={require('../../assets/images/keepbuy.png')}
          style={styles.image}
        />
        <Text style={styles.header}>KeepBuy(bye..)</Text>

        <Text style={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#7ECA9C"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#7ECA9C"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#7ECA9C"
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
        <Text onPress={() => navigate('Login')} style={styles.login}>
          Login
        </Text>
      </View>
    </>
  );
};

export {Register};
