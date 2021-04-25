import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

interface FirebaseListProps {}

const FirebaseList: React.FC<FirebaseListProps> = () => {
  return (
    <View style={tailwind('flex flex-1 items-center justify-center')}>
      <Text>Firebase Demo</Text>
    </View>
  );
};

export default FirebaseList;
