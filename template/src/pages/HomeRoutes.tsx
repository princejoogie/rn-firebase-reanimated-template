import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReanimatedList from '@components/reanimated-tests/ReanimatedList';
import FirebaseList from '@components/firebase-tests/FirebaseList';
import { NavigationProp } from '@react-navigation/native';

const HomeStack = createMaterialTopTabNavigator();

interface HomeRoutesProps {
  navigation: NavigationProp<any, any>;
}

const HomeRoutes: React.FC<HomeRoutesProps> = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Reanimated"
      tabBarPosition="bottom"
      backBehavior="none"
      tabBarOptions={{
        labelStyle: {
          textTransform: 'capitalize',
        },
        indicatorStyle: {
          height: 0,
        },
      }}>
      <HomeStack.Screen
        name="Reanimated"
        component={ReanimatedList}
        options={{
          tabBarLabel: '🎨 Reanimated',
        }}
      />
      <HomeStack.Screen
        name="Firebase"
        component={FirebaseList}
        options={{
          tabBarLabel: '🔥 Firebase',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
