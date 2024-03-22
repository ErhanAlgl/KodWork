import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  titleContainer: {
    borderRadius: 10,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
  },
  detailContainer: {
    borderRadius: 10,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#36474F',
    paddingBottom: 5,
  },
  jobLocation: {
    color: 'red',
    paddingBottom: 5,
  },
  variableJobLocation: {
    color: 'black',
    fontWeight: 'bold',
  },
  variableJobLevel: {
    color: 'black',
    fontWeight: 'bold',
  },
  jobLevel: {
    color: 'red',
    paddingBottom: 5,
  },
  jobSubTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#36474F',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 35,
    paddingTop: 5,
  },
  submitButtonContainer: {
    flex: 1,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#e53935',
    borderRadius: 5,
  },
  favoriteButtonContainer: {
    flex: 1,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#e53935',
    borderRadius: 5,
  },
});
