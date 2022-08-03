import React from 'react';
import { Linking, View, Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

const WWTKScreen = ({ navigation }) => {
  const ref = React.useRef(null);
  useScrollToTop(ref);
  return (  
    <ScrollView ref={ref}>
      <View style ={styles.box}> 
              <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21977039')}>                 
                  <Text style ={styles.text}>Date :05-20-2022</Text>
                  <Text style ={styles.text}>Genesis 13</Text>
                  <Text style ={styles.text}>Understanding the Will of God in Every Situation</Text>
              </TouchableOpacity>         
      </View>
      <View style ={styles.box}> 
          <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21976433')}>                 
                <Text style ={styles.text}>05-18-2022</Text>
                <Text style ={styles.text}>James 4:1-11,Genesis 21</Text>
                <Text style ={styles.text}>Not Being Double-minded in the Way of Faith in Christ</Text>
            </TouchableOpacity>
      </View > 
      <View style ={styles.box}> 
          <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21976092')}>                 
                <Text style ={styles.text}>05-14-2022</Text>
                <Text style ={styles.text}>Daniel 3</Text>
                <Text style ={styles.text}>The God-moment in the Darkest Hour for Those Who Walk With God</Text>
            </TouchableOpacity>
      </View > 
       <View style ={styles.box}> 
          <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21973461')}>                 
                <Text style ={styles.text}>05-10-2022</Text>
                <Text style ={styles.text}>Genesis 4:1-12</Text>
                <Text style ={styles.text}>Cain's Spirit of Jealousy & Rebellion</Text>
            </TouchableOpacity>
      </View > 
      <View style ={styles.box}> 
          <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21970974')}>                 
                <Text style ={styles.text}>05-06-2022</Text>
                <Text style ={styles.text}>1 Samuel 15,Genesis 3</Text>
                <Text style ={styles.text}>What is Delusion and How to Safeguard Ourselves from It</Text>
            </TouchableOpacity>
      </View > 
      <View style ={styles.box}> 
          <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21970820')}>                 
                <Text style ={styles.text}>05-05-2022</Text>
                <Text style ={styles.text}>1 Samuel 15,Luke 12:4-5,Genesis 6:22,Genesis 7:5</Text>
                <Text style ={styles.text}>Warning Against Disobedience to God like Saul and Understanding True Meaning of 'Fear of God'</Text>
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

export default WWTKScreen