import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import HeaderSection from './app/components/Header'

export default class App extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <HeaderSection title="Title" />
        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder={"Digite seu email"} />
          <Text>Senha</Text>
          <TextInput style={styles.input} placeholder={"Digite seu email"} />
          <Button title="Cadastrar" style={{width:"100%"}}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  input:{
    width:"100%",
    height:40,
    borderWidth:1,
    borderColor:"#B1B1B1",
    borderRadius:8,
    backgroundColor:"#FCF8F6",
    padding: 12,
    marginTop:12,
    marginBottom: 12,
  },
  form:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    padding:10

  }
});
