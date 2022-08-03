import React from 'react';
import { Linking, View, Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';


const FPScreen = ({ navigation }) => {
    const ref = React.useRef(null);
    useScrollToTop(ref);
    return (
        <ScrollView ref={ref}>
            <View style ={styles.box}> 
                    <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21929681')}>                 
                        <Text style ={styles.text}>Date :02-05-2022</Text>
                        <Text style ={styles.text}>Genesis 26</Text>
                        <Text style ={styles.text}>God Who Guides Us To The Place Of Restoration</Text>
                    </TouchableOpacity>         
            </View>
            <View style ={styles.box}> 
                <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21914975')}>                 
                        <Text style ={styles.text}>01-07-2022</Text>
                        <Text style ={styles.text}>Matthew 19:16-30, Mark 10:17-30, Luke 18:18-30</Text>
                        <Text style ={styles.text}>The Rich Young Ruler Passage Explained, Our Commitment To God's Call</Text>
                    </TouchableOpacity>
            </View > 
            <View style ={styles.box}> 
                <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21914695')}>                 
                        <Text style ={styles.text}>01-16-2022</Text>
                        <Text style ={styles.text}>Luke 5:17-26</Text>
                        <Text style ={styles.text}>Coming To God's Power With Unwavering Faith</Text>
                    </TouchableOpacity>
            </View > 
            
      </ScrollView>      
      
      );
}

   
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },

    box: {
        padding: 2,
    },

    inner: {
        flex: 1,
        backgroundColor: '#4169e1',
        alignItems: 'center',
        justifyContent: 'center'
  
    },
    text: {
      fontSize: 20,
      color: 'white',
      textAlign:'center'
    },

   });


export default FPScreen;


