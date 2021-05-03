import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Home from '../screens/home';
import Onboarding from '../screens/onboarding';
import Detail from '../screens/detail';
import Header from '../components/header';
import {fadeFromBottom} from './styles';

const Stack = createStackNavigator();
const Root = createStackNavigator();
function AppNavigator() {
  const onboardingShown = useSelector((state: any) => state.onboarding.shown);

  const AppStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => <Header />}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{header: () => <Header backButton />}}
      />
    </Stack.Navigator>
  );

  return (
    <Root.Navigator headerMode={'none'} mode={'modal'}>
      {!onboardingShown && (
        <>
          <Root.Screen
            options={{
              ...fadeFromBottom,
              headerShown: false,
            }}
            name="Onboarding"
            component={Onboarding}
          />
        </>
      )}
      <Root.Screen name="App" component={AppStack} />
    </Root.Navigator>
  );
}

export default AppNavigator;
