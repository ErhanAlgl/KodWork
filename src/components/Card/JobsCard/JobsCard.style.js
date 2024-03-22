import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  bodyContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
  },
  companyName: {
    paddingBottom: 5,
  },
  jobsName: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  locationContainer: {
    backgroundColor: '#F05350',
    alignSelf: 'baseline',
    borderRadius: 15,
    padding: 5,
  },
  locations: {
    color: 'white',
    fontWeight: 'bold',
  },
  levels: {
    alignSelf: 'flex-end',
    color: '#F05350',
    fontWeight: 'bold',
    padding: 2,
  },
});
