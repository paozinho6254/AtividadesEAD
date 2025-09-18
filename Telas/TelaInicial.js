import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={{ uri: "https://media1.tenor.com/m/cIO9slzgEWUAAAAd/gold-ship-gold-ship-dance.gif" }}/>

      <Text style={styles.titulo}>Tela Inicial</Text>

      <View style={styles.buttonContainer}>
      <Button style={styles.button}
        title="Ir para Login"
        onPress={() => navigation.navigate("Login")}
      />

      <View style={styles.espaco} />

      <Button style={styles.button}
        title="Ir para Cadastro"
        onPress={() => navigation.navigate("Register")}
      />

      <View style={styles.espaco} />

      <Button style={styles.button}
        title="Ir para Redefinir Senha"
        onPress={() => navigation.navigate("ResetPassword")}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
  width: 200,
  height: 200,
  borderRadius: 30,
  marginBottom: 30
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },

  espaco: {
    marginVertical: 10,
  },

  buttonContainer: {
  width: "100%",
  marginTop: 10,
  },

  button: {
  color: "#FFFFFF"
  }

});