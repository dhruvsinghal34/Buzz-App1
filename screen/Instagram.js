import React from 'react';
import { Text, View,StyleSheet} from 'react-native';

export default class InstagramScreen extends React.Component {
render(){
return(
  <View style={styles.container}>
  <Text>
This is the link for Instagram  joining please copy paste the link in google
https://www.instagram.com/
  </Text>
  </View>
)
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });