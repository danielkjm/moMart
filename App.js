import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.category}>Clothing</Text>
          <Text style={styles.category}>Books</Text>
        </View>
        <View>
          <Text style={styles.category}>Music</Text>
          <Text style={styles.category}>Furniture</Text>
        </View>
        <View style={styles.nav}>Nav</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  category: {
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 45
  },
  nav: {
    borderRadius: 1,
    borderColor: 'black',
    borderWidth: 0.5
  }
});
