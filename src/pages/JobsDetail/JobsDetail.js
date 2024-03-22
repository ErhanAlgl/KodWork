import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  Alert,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import styles from './JobsDetails.styles';
import {useDispatch} from 'react-redux';

const JobsDetail = ({route}) => {
  const {item} = route.params;
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();

  const [job, setJobs] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const handleSubmit = () =>
    Alert.alert(
      'KodWork',
      'Your job application has been submitted successfully!',
    );

  const handleFavorite = jobs => {
    setFavorite([...favorite, job]);
    setJobs('');
    const newList = [...favorite];
    const index = favorite.indexOf(jobs);
    newList.splice(index, 1);
    setJobs(newList);
    dispatch({type: 'ADD_FAVORITIES', payload: {jobs}});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.jobTitle}>{item.name}</Text>
          {item.locations && item.locations.length > 0 && (
            <Text style={styles.jobLocation}>
              Locations:{' '}
              <Text style={styles.variableJobLocation}>
                {item.locations[0].name}
              </Text>
            </Text>
          )}
          {item.levels && item.levels.length > 0 && (
            <Text style={styles.jobLevel}>
              Job Level:{' '}
              <Text style={styles.variableJobLevel}>{item.levels[0].name}</Text>
            </Text>
          )}
          <Text style={styles.jobSubTitle}>Job Detail</Text>
        </View>
        <View style={styles.detailContainer}>
          <RenderHTML
            source={{html: `${item.contents}`}}
            contentWidth={width}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.submitButtonContainer}>
            <Button color="white" title="Submit" onPress={handleSubmit} />
          </View>
          <View style={styles.favoriteButtonContainer}>
            <Button
              color="white"
              title="Add to Favorite"
              onPress={() => handleFavorite(item)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobsDetail;
