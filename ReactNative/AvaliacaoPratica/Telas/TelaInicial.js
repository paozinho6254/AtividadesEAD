import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={globalStyles.container}> {/* Usa o container global */}
      <Image style={globalStyles.logo} source={{ uri: "https://media1.tenor.com/m/cIO9slzgEWUAAAAd/gold-ship-gold-ship-dance.gif" }}/>

      <Text style={globalStyles.title}>Tela Inicial</Text> {/* Usa o título global */}

      <View style={globalStyles.inputsContainer}> {/* Usa um container para botões também */}
        <Button
          title="Ir para Login"
          onPress={() => navigation.navigate("Login")}
          color={globalStyles.button.backgroundColor} // Adapta a cor do botão
        />

        <View style={globalStyles.verticalSpacer} /> {/* Espaçador global */}

        <Button
          title="Ir para Cadastro"
          onPress={() => navigation.navigate("Register")}
          color={globalStyles.button.backgroundColor}
        />

        <View style={globalStyles.verticalSpacer} />

        <Button
          title="Ir para Redefinir Senha"
          onPress={() => navigation.navigate("ResetPassword")}
          color={globalStyles.button.backgroundColor}
        />
        <View style={globalStyles.verticalSpacer} />
      </View>
    </View>
  );
}
