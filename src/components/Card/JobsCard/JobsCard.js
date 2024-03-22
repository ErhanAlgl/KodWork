import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './JobsCard.style';

const JobsCard = ({jobs, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View>
            <Text numberOfLines={1} style={styles.jobsName}>
              {jobs.name}
            </Text>
            <Text style={styles.companyName}>{jobs.company.name}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locations}>{jobs.locations[0].name}</Text>
          </View>
          <View>
            <Text style={styles.levels}>{jobs.levels[0].name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobsCard;
