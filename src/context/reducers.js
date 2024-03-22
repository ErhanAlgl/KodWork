import {Alert} from 'react-native';
export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORITIES':
      const {jobs} = action.payload;
      if (state.favoritedList.find(item => item.id === jobs.id)) {
        Alert.alert(
          'KodWork',
          'Error! This job is already in your favourites!',
        );
        return state;
      }

      const newFavJob = [jobs, ...state.favoritedList];
      Alert.alert('KodWork', 'The job has been added to favorites!');
      return {...state, favoritedList: newFavJob};

    case 'REMOVE_FAVORITIES':
      return {
        favoritedList: [
          ...state.favoritedList.filter(job => job !== action.payload),
        ],
      };
    default:
      return state;
  }
}
