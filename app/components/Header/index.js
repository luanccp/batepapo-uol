import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HeaderSection = ({title}) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

export default HeaderSection;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width:"100%",
    backgroundColor: 'red'
  },
});