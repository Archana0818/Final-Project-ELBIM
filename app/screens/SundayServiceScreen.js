import React from 'react';
import { Linking, View, Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

const SundayServiceScreen = ({ navigation }) => {
  const ref = React.useRef(null);

  useScrollToTop(ref);
    return (  
      <ScrollView ref={ref}>
        <View style ={styles.box}> 
                <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21969727')}>                 
                    <Text style ={styles.text}>Date :05-01-2022</Text>
                    <Text style ={styles.text}>Isaiah 38</Text>
                    <Text style ={styles.text}>Blessings in Turning to God by Faith and Obedience</Text>
                </TouchableOpacity>         
        </View>
        <View style ={styles.box}> 
            <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21969722')}>                 
                  <Text style ={styles.text}>05-01-2022</Text>
                  <Text style ={styles.text}>John 6:1-14</Text>
                  <Text style ={styles.text}> Passing the Spiritual Tests by Faith and Obedience</Text>
              </TouchableOpacity>
        </View > 
        <View style ={styles.box}> 
            <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21966645')}>                 
                  <Text style ={styles.text}>04-24-2022</Text>
                  <Text style ={styles.text}>Genesis 13</Text>
                  <Text style ={styles.text}> Staying in Boundaries of God's Will with Patience, Humility and Faith</Text>
              </TouchableOpacity>
        </View > 
         <View style ={styles.box}> 
            <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21959842')}>                 
                  <Text style ={styles.text}>04-10-2022</Text>
                  <Text style ={styles.text}>Genesis 22:1-2</Text>
                  <Text style ={styles.text}>Testing of Our Love for God Before Receiving God's Blessings</Text>
              </TouchableOpacity>
        </View > 
        <View style ={styles.box}> 
            <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21950046')}>                 
                  <Text style ={styles.text}>03-20-2022</Text>
                  <Text style ={styles.text}>Hebrews 11:17-19</Text>
                  <Text style ={styles.text}> Faith in God's Word That Perseveres in Challenging Situations</Text>
              </TouchableOpacity>
        </View > 
        <View style ={styles.box}> 
            <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21935129')}>                 
                  <Text style ={styles.text}>02-20-2022</Text>
                  <Text style ={styles.text}>Romans 8:1-14</Text>
                  <Text style ={styles.text}> Enjoying The Freedom In The Spirit Of Life & Holiness</Text>
              </TouchableOpacity>
        </View > 
        <View style ={styles.box}> 
            <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21935123')}>                 
                  <Text style ={styles.text}>02-20-2022</Text>
                  <Text style ={styles.text}>Luke 19:1-10</Text>
                  <Text style ={styles.text}>God's Compassion To Save The Lost And To Make Them Partaker Of His Inheritance</Text>
              </TouchableOpacity>
          </View > 
          <View style ={styles.box}> 
            <TouchableOpacity style ={styles.inner} onPress={()=>Linking.openURL('https://elbim.sermon.net/main/main/21932060')}>                 
                  <Text style ={styles.text}>02-13-2022</Text>
                  <Text style ={styles.text}>Ezekiel 37</Text>
                  <Text style ={styles.text}>Seeking Christ, Speaking Life</Text>
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

export default SundayServiceScreen;
