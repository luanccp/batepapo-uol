import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,Button, ScrollView } from 'react-native';
import HeaderSection from "../components/Header";
import CardMessage from '../components/Message';
import { FirebaseInit } from '../utils/firebase';

export default class chatScreen extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
      message: ""
    };
  }

  static navigationOptions = {title:"Chat"}

  addMessage = (message) => {
    if(!message) {
      alert("Digite alguma coisa antes de enviar")
      return
    }

    let nodeMessages = FirebaseInit.database().ref('Messages/')
    var newMessage = nodeMessages.push()

    newMessage
      .set({ message: this.state.message })
      .then(() => alert("Você enviou uma mensagem!"))
      .catch(error => alert("Ops! :( \n ", error));

  }   

  render() 
  {
    return (
      <View style={styles.container}>
        <HeaderSection title="Chat" />
        <View style={styles.content}>
          <ScrollView style={styles.chat}>
            <CardMessage name={"Luan"} message={"Minha primeira messagem"} />
          </ScrollView>
          <View style={styles.sendMessageBox}>
            <TextInput
              style={styles.input}
              placeholder={"Digite sua mensagem"}
              onChangeText={value => this.setState({ message: value })}
            ></TextInput>
            <Button title={"Enviar"} onPress={() => this.addMessage(this.state.message)} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  input: {
    width: "60%",
    height: 40,
    borderWidth: 1,
    borderColor: "#B1B1B1",
    borderRadius: 8,
    backgroundColor: "#FCF8F6",
    padding: 12,
    marginTop: 12,
    marginBottom: 12
  },
  chat: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "70%",
    padding: 10,
    backgroundColor: "#FAF9EA"
  },
  sendMessageBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#DBFFC8",
    height: 100,
    width: "100%"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center"
  }
});
  