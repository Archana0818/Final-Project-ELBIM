import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SermonNavigator from './SermonNavigator';
import Songs from '../screens/Songs';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions = {{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor : `#add8e6`,
            tabBarActiveBackgroundColor: '#b22222',
            tabBarInactiveBackgroundColor : '#b22222',
            headerTitle:'El Bethel International Ministries',
            headerTintColor: '#fff',
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#b22222'}            
        }} 
    >

        <Tab.Screen name='Home' component={HomeScreen} options = {{
            tabBarIcon : ({color, size}) => {
                return <Icon name="home" size={size} color= {color} />
            }
        }}/>

        <Tab.Screen name='Sermon' component={SermonNavigator} options = {{
            headerShown:false,
            tabBarIcon : ({color, size}) => {
                return <Icon name="bible" size={size} color= {color} />
            }
        }}/>

        <Tab.Screen name='Songs' component={Songs} options = {{
            headerShown:false,
            tabBarIcon : ({color, size}) => {
                return <Icon name="music" size={size} color= {color} />
            }
        }}/>

    </Tab.Navigator>
  );
}

export default AppNavigator