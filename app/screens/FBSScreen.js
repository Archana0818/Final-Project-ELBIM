import React from 'react';
import { Linking, View, Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

const FBSScreen = ({ navigation }) => {
  const ref = React.useRef(null);
  useScrollToTop(ref);
  return (  
    <ScrollView ref={ref}>
      <View style ={styles.box}> 
              <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21973448')}>                 
                  <Text style ={styles.text}>Date :05-10-2022</Text>
                  <Text style ={styles.text}>Matthew 8:5-13</Text>
                  <Text style ={styles.text}>Great Faith, Great Love and Great Humility that Pleases God</Text>
              </TouchableOpacity>         
      </View>
      <View style ={styles.box}> 
          <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21967373')}>                 
                <Text style ={styles.text}>04-26-2022</Text>
                <Text style ={styles.text}>2 Kings 5:1-2,Luke 4:23-27</Text>
                <Text style ={styles.text}>Faith of Professors of Christianity Compared to Heathen Naaman's Faith</Text>
            </TouchableOpacity>
      </View > 
      <View style ={styles.box}> 
          <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21961870')}>                 
                <Text style ={styles.text}>04-12-2022</Text>
                <Text style ={styles.text}>Genesis 24:1-9</Text>
                <Text style ={styles.text}>Abraham's Faith Against Enemy's Words of Unbelief</Text>
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


export default FBSScreen;
