import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

export default function TelaEsqueciSenha({ navigation }) {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const senhasIguais = senha && confirmarSenha && senha === confirmarSenha;

  const handleSalvar = () => {
    if (!senhasIguais) {
      setErro("As senhas devem ser iguais!");
      return;
    }

    setErro('');
    Alert.alert("Sucesso", "Senha redefinida com sucesso!");
    navigation.navigate("Login"); // volta para Login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Redefinir Senha</Text>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
       <View style={styles.inputs}>
      <TextInput
        placeholder="Nova Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        placeholder="Confirmar Senha"
        secureTextEntry
        style={styles.input}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Button title="Salvar" onPress={handleSalvar} disabled={!senhasIguais} />
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

  imagem: {
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

  erro: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  }
});