import React, { useState } from 'react';
import { loginUsuario } from "../utils/authStore";
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const camposPreenchidos = email && senha;

  const handleLogin = () => {
    const usuario = loginUsuario(email, senha);

    if (usuario) {
      Alert.alert("Bem-vindo!", `Você entrou como: ${usuario.nome}`);
      navigation.navigate("Profile", {
        name: usuario.nome,
        avatar: usuario.avatar
      });
    } else {
      Alert.alert("Erro", "Email ou senha inválidos");
    }
  };

  return (
    <View style={styles.container}>

       <Image style={styles.imagem} source={{ uri:"https://imgs.search.brave.com/BRgAcGii2XqsZiIWGG0lU_b5ORFvinyinU_izwDpU9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHd6LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNy9G/MTYtZHJ1emUtcGls/b3QuanBnP3F1YWxp/dHk9ODUmdz03Njg"}}/>

      <Text style={styles.titulo}>Login</Text>
        <View style={styles.inputs}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Login" onPress={handleLogin} disabled={!camposPreenchidos} />

      </View>


      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.link}>
        <Text style={styles.linkText}>Ir para Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")} style={styles.link}>
        <Text style={styles.linkText}>Esqueci minha senha</Text>
      </TouchableOpacity>
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

  imagem:{
  marginBottom: 35,
  width: 350,
  height: 200,
  borderRadius: 30,
  alignItems: 'center'
  },

 inputs: {
  width: "100%",
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },

  link: {
    marginTop: 15,
    alignItems: "center",
  },

  linkText: {
    color: "blue",
    fontSize: 16,
  }

});