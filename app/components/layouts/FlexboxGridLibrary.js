import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

export default class FlexboxGridLibrary extends Component {
  
  render() {
  	return (
		<Grid>
		    <Col>
				<Row size={50} style={styles.orange_box}></Row>
				<Row size={50} style={styles.green_box}></Row>
		    </Col>
		    <Col style={styles.gray_box}></Col>
		</Grid>
  	);
  }
  
}

const styles = StyleSheet.create({
  orange_box: {
  	backgroundColor: 'orange'
  },
  green_box: {
  	backgroundColor: 'green'
  },
  gray_box: {
  	backgroundColor: 'gray'
  }
});