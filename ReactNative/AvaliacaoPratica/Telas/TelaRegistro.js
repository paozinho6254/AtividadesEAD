import { registrarUsuario } from "../utils/authStore"; // importa o "banco"

import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function TelaRegistro({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [avatar, setAvatar] = useState('');

  const camposPreenchidos = cpf && nome && email && senha;

  const handleSalvar = () => {
    registrarUsuario({ cpf, nome, email, senha, avatar });

    Alert.alert("Sucesso", `Usuário ${nome} cadastrado com sucesso!`);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={{ uri:"https://i.redd.it/6uc7kozvbnef1.gif"}}/>

      <Text style={styles.titulo}>Cadastro</Text>
      <View style={styles.inputs}>
        <TextInput
          placeholder="CPF"
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          placeholder="URL da Foto de Perfil"
          style={styles.input}
          value={avatar}
          onChangeText={setAvatar}
        />

        <Button title="Salvar" onPress={handleSalvar} disabled={!camposPreenchidos} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.voltarBtn}>
        <Text style={styles.voltarText}>Voltar para Login</Text>
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

  voltarBtn: {
    marginTop: 15,
    alignItems: "center",
  },

  voltarText: {
    color: "blue",
    fontSize: 16,
  }

});
