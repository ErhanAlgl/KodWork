import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import FavoritedJobs from './pages/FavoritedJobs';
import JobsDetail from './pages/JobsDetail';
import JobProvider from './context/Provider';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function JobsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Home}
        options={{
          headerStyle: {backgroundColor: '#F05350'},
          headerTitleStyle: {color: 'white'},
        }}
      />
      <Stack.Screen
        name="Jobs Detail"
        component={JobsDetail}
        options={{
          headerStyle: {backgroundColor: '#F05350'},
          headerTitleStyle: {color: 'white'},
          headerShown: true, // Geri butonunu JobsDetail sayfasında göstermek için true olarak ayarladık.
        }}
      />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <JobProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Jobs"
            component={JobsStack}
            options={{
              headerShown: false, // Drawer menüsünün JobsStack içinde gösterilmemesi sağlamak için false olarak ayarladık.
            }}
          />
          <Drawer.Screen
            name="Favorited"
            component={FavoritedJobs}
            options={{
              headerStyle: {backgroundColor: '#F05350'},
              headerTitleStyle: {color: 'white'},
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
}

export default Router;
