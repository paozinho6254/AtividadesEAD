import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa suas telas existentes
import TelaInicial from './telas/TelaInicial';
import TelaLogin from './telas/TelaLogin';
import TelaRegistro from './telas/TelaRegistro';
import TelaEsqueciSenha from './telas/TelaEsqueciSenha';

// Importa as novas telas adaptadas
import HomeScreen from './telas/TelaInicial';
import ProfileScreen from './telas/TelaPerfil';

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
        {/* Novas telas adicionadas */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}