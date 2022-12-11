import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

const styles = StyleSheet.create({
  platform: {
    height: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '43%',
    resizeMode: 'contain',
  },
  header: {
    fontSize: 20,
    alignSelf: 'center',
  },
  text: {
    marginHorizontal: 55,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.4,
  },
  inputContainer: {
    position: 'relative',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 10,
    borderColor: '#7ECA9C',
    borderRadius: 23,
    paddingVertical: 2,
  },
  input: {
    paddingHorizontal: 10,
    width: '100%',
  },
  buttonContainer: {
    marginHorizontal: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#7ECA9C',
    paddingVertical: 10,
    borderRadius: 23,
  },
  buttonText: {
    color: 'white',
  },
  login: {
    alignSelf: 'center',
    color: '#2D4059',
    paddingVertical: 20,
  },
  error: {
    position: 'absolute',
    color: 'red',
    textAlign: 'center',
    bottom: '40%',
    right: 10,
  },
});

export default styles;
