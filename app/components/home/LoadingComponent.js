import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import React from 'react';

const LoadingComponent = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingComponent;
