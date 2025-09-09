import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet, Alert } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || senha.trim() === "") {
      Alert.alert("Erro", "Por favor, preencha e-mail e senha!");
      return;
    }

    Alert.alert("Sucesso", `Bem-vindo, ${email}!`);
  };

  // condição para liberar o botão
  const isFormValid = email.trim() !== "" && senha.trim() !== "";

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://media1.tenor.com/m/cIO9slzgEWUAAAAd/gold-ship-gold-ship-dance.gif"
        }}
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Login" onPress={handleLogin} disabled={!isFormValid} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 16,
    marginBottom: 5,
    color: "#333"
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  buttonContainer: {
    width: "90%",
    marginTop: 10,
  },
  button: {
  color: "#FFFFFF"
  }
});
