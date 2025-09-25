import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function ProfileScreen({ route }) { // Adicione 'route' como prop
  const { name, avatar } = route.params || {}; // Acessa os parâmetros da rota, com fallback

  return (
    <View style={styles.container}>
      {avatar ? (
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarPlaceholderText}>Sem Avatar</Text>
        </View>
      )}

      <Text style={styles.profileName}>{name || 'Nome não informado'}</Text>
      <Text style={styles.profileMessage}>Este é o seu perfil ✨</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholderText: {
    color: '#666',
    fontSize: 14,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  profileMessage: {
    fontSize: 18,
    color: '#555',
  },
   secondaryButton: { // Exemplo de estilo para um botão "Voltar"
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
  },
});