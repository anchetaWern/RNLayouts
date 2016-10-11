import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class Positioning extends Component {
  render() {
  	return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <View style={[styles.inner_box, styles.red_box]}></View>
        </View>
        <View style={[styles.box, styles.box2]}>
          <View style={[styles.inner_box, styles.orange_box]}></View>
        </View>
        <View style={[styles.box, styles.box3]}>
          <View style={[styles.inner_box, styles.purple_box]}></View>
        </View>
        <View style={[styles.box, styles.box4]}>
          <View style={[styles.inner_box, styles.black_box]}></View>
        </View>
        <View style={[styles.box, styles.box5]}></View>
      </View>
  	);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: '#333'
  },
  box1: {
    top: 0,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  box2: {
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'green'
  },
  box3: {
    top: 0,
    bottom: 0,
    left: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'orange'
  },
  box4: {
    top: 0,
    bottom: 0,
    right: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#03A9F4'
  },
  box5: {
    width: 400,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ccc'
  },  
  inner_box: {
    width: 20,
    height: 20,
  },
  red_box: {
    position: 'relative',
    backgroundColor: 'red',
    top: 10,
    left: 10
  },
  orange_box: {
    position: 'absolute',
    backgroundColor: 'orange',
    top: 10,
    right: 10
  },
  purple_box: {
    position: 'fixed',
    backgroundColor: 'purple',
    bottom: 10,
    right: 10
  },
  black_box: {
    position: 'static',
    backgroundColor: 'black',
    bottom: 10,
    right: 10
  }
});      