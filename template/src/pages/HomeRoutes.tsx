import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReanimatedList from '@components/reanimated-tests/ReanimatedList';
import FirebaseList from '@components/firebase-tests/FirebaseList';
import Home from 'components/Home';
import { NavigationProp } from '@react-navigation/native';

const HomeStack = createStackNavigator();

interface HomeRoutesProps {
  navigation: NavigationProp<any, any>;
}

const HomeRoutes: React.FC<HomeRoutesProps> = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Reanimated" component={ReanimatedList} />
      <HomeStack.Screen name="Firebase" component={FirebaseList} />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
