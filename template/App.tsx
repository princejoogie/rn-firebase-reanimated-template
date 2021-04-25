import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import Expand from '@components/reanimated-tests/Expand';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <View style={tailwind('flex flex-1')}>
      <Expand />
    </View>
  );
};

export default App;
