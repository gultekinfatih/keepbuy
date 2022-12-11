import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    width: '96%',
    height: '85%',
    marginHorizontal: '2%',
    backgroundColor: '#9eac00',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
  },
  itemView: {
    // marginHorizontal: '10%',
    backgroundColor: 'white',
    height: 30,
    width: '96%',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 4,
  },
  itemText: {
    color: 'black',
    paddingHorizontal: 10,
  },
  noResultView: {
    alignSelf: 'center',
    // margin: 20,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  noResultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
