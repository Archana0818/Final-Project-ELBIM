import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';


const SermonScreen = ({ navigation }) => {
  return (
<View style ={styles.container}>
            <View style ={styles.box}> 
                <TouchableOpacity style ={styles.inner} onPress={() => navigation.navigate('SundayServiceScreen')} >                 
                    <Text style ={styles.text}>Sunday Service</Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.box}> 
                <TouchableOpacity style ={styles.inner} onPress={() => navigation.navigate('WWTKScreen')} >
                    <Text style ={styles.text}>Walking With the King </Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.box}> 
                <TouchableOpacity style ={styles.inner} onPress={() => navigation.navigate('FBSScreen')}>
                    <Text style ={styles.text}>Family Bible Study</Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.box}> 
                <TouchableOpacity style ={styles.inner} onPress={() => navigation.navigate('FPScreen')}>
                    <Text style ={styles.text}>Fasting Prayer</Text>
                </TouchableOpacity>
            </View>

        </View>      
  )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
      },

    box: {
        width: '50%',
        height: '50%',
        padding: 5,
    },

    inner: {
        flex: 1,
        backgroundColor: '#ffa500',
        alignItems: 'center',
        justifyContent: 'center'
  
    },
    text: {
      fontSize: 30,
      color: 'white'
    },

   });

export default SermonScreen