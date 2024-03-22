import React from 'react';
import {View, Text} from 'react-native';
import useFetch from '../../../hooks/useFetch';

const JobsDetailCard = ({route}) => {
  const {id} = route.params;
  console.log(id);
  const {data, error, loading} = useFetch(
    'https://www.themuse.com/api/public/jobs/' + id,
  );
  return (
    <View>
      <View>
        <Text>Test{data.name}</Text>
        <Text>JobsDetailCard</Text>
        <Text>JobsDetailCard</Text>
      </View>
      <View>
        <Text>JobsDetailCard</Text>
        <Text>JobsDetailCard</Text>
      </View>
    </View>
  );
};

export default JobsDetailCard;
