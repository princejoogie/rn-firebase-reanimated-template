import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import tailwind from 'tailwind-rn';
import Svg, { Path } from 'react-native-svg';

interface HomeProps {
  navigation: NavigationProp<any, any>;
}

interface ItemProps {
  route: string;
  title: string;
  handleClick: (arg0: string) => void;
}

const Item: React.FC<ItemProps> = ({ title, route, handleClick }) => {
  return (
    <TouchableOpacity
      onPress={() => handleClick(route)}
      activeOpacity={0.7}
      style={tailwind(
        'flex flex-row w-full bg-white mt-2 p-4 items-center justify-between',
      )}>
      <Text>{title}</Text>
      <Svg
        style={tailwind('text-black h-4 w-4')}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const routes = ['Reanimated', 'Firebase'];
  const titles = ['🎨 Reanimated', '🔥 Firebase'];

  const handleClick = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <View style={tailwind('flex flex-1')}>
      {routes.map((route, idx) => (
        <Item
          key={route}
          title={titles[idx]}
          route={route}
          handleClick={handleClick}
        />
      ))}
    </View>
  );
};

export default Home;
