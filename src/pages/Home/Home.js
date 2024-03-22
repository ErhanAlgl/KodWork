import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import Config from 'react-native-config';

import JobsCard from '../../components/Card/JobsCard';
import useFetch from '../../hooks/useFetch';

const Home = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);

  function handleJobSelect(item) {
    navigation.navigate('Jobs Detail', {item});
  }

  const renderJobs = ({item}) => (
    <JobsCard jobs={item} onSelect={() => handleJobSelect(item)} />
  );

  if (loading) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#F05350" />
      </View>
    );
  }

  if (error) {
    return <Text>Opss something went wrong... Error Code: "{error}"</Text>;
  }
  return <FlatList data={data.results} renderItem={renderJobs} />;
};

export default Home;
