import * as React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SermonScreen from '../screens/SermonScreen';
import SundayServiceScreen from '../screens/SundayServiceScreen';
import FPScreen from '../screens/FPScreen';

import WWTKScreen from '../screens/WWTKScreen';
import FBSScreen from '../screens/FBSScreen';

const Stack = createNativeStackNavigator ();

const SermoneNavigator = () => {
    return (
        <Stack.Navigator 
          screenOptions={{ headerTitleStyle :{color:'white',fontWeight: 'bold'}, headerStyle:{backgroundColor:'#ffa500'}, headerTitleAlign: 'center'}}
        >
          <Stack.Screen options={{headerShown: false}} name="SermonScreen" component={SermonScreen} />
          <Stack.Screen options={{ title: 'Sunday Service' }} name= "SundayServiceScreen" component={SundayServiceScreen} />
          <Stack.Screen options={{ title: 'Fasting Prayer' }} name= "FPScreen" component={FPScreen} />
          <Stack.Screen options={{ title: 'Walking With the King' }} name= "WWTKScreen" component={WWTKScreen} />
          <Stack.Screen options={{ title: 'Family Bible Study'}} name= "FBSScreen" component={FBSScreen} />
        </Stack.Navigator>
     
      );
}

export default SermoneNavigator;

