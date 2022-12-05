import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

const styles = StyleSheet.create({
  platform: {
    height: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: '#FFF',
  },
  container: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '33%',
    resizeMode: 'contain',
  },
  header: {
    fontSize: 30,
    alignSelf: 'center',
  },
  text: {
    marginHorizontal: 55,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: '#7ECA9C',
    borderRadius: 23,
    paddingVertical: 2,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: '1.5%',
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
    paddingVertical: 30,
  },
});

export default styles;
