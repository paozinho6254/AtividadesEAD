import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa as telas
import TelaInicial from './Telas/TelaInicial';
import TelaLogin from './Telas/TelaLogin';
import TelaRegistro from './Telas/TelaRegistro';
import TelaEsqueciSenha from './Telas/TelaEsqueciSenha';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen
          name="Inicial"
          component={TelaInicial}
          options={{ title: 'Tela Inicial' }}
        />
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={TelaRegistro}
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={TelaEsqueciSenha}
          options={{ title: 'Redefinir Senha' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
