import { View, Text,StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style ={styles.container}>
      <StatusBar backgroundColor='#b22222' barStyle="light-content"/>
      <Text style ={styles.text}>Join us Sundays at 1 PM EST</Text>
      <Text style ={styles.text}> 28 E. Main St. </Text>
      <Text style ={styles.text}> Port Jervis, NY 12771</Text>
      <Text style ={styles.textContact}> Phone: (845) 360-0534</Text>
      <Text style ={styles.textContact}> Email: contact@ElBim.org</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      color: 'black',
      textAlign:'center'
    },
    textContact: {
      fontSize: 18,
      color: '#dc143c',
      textAlign:'center'
    },
 });

export default HomeScreen;