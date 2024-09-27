import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VideoCall = () => {
  return (
    <View style={styles.container}>
      <Text>Video Call Component</Text>
      {/* Video call implementation will go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoCall;
