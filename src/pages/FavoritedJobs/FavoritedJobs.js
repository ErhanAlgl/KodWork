import React from 'react';
import {View, Text, FlatList, Button, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './FavoritedJobs.style';

const FavoritedJobs = () => {
  const list = useSelector(s => s.favoritedList);

  const dispatch = useDispatch();

  const handleRemove = item => {
    dispatch({type: 'REMOVE_FAVORITIES', payload: item});
    Alert.alert('KodWork', 'Successfully removed from favorites!');
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({item}) => (
          <View style={styles.job_container}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.company}>{item.company.name}</Text>
            <View style={styles.locations_container}>
              <Text style={styles.locations}>{item.locations[0].name}</Text>
            </View>
            <Text style={styles.level}>{item.levels[0].name}</Text>
            <Button
              onPress={() => handleRemove(item)}
              color="#e53935"
              title="Remove"
            />
          </View>
        )}
      />
    </View>
  );
};

export default FavoritedJobs;
