import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Um fundo consistente
  },
  title: { // Títulos maiores e mais chamativos
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: { // Campos de texto padronizados
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: { // Botão primário
    backgroundColor: '#007AFF', // Azul padrão do iOS
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: { // Botão secundário (para links ou ações menos proeminentes)
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#eee',
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
  },
  linkText: { // Estilo para textos de link
    color: '#007AFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  errorText: { // Mensagens de erro
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  // Estilos específicos para Avatar
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
  // Estilos para imagens (logo/gif)
  image: { // Um estilo geral para imagens
    marginBottom: 35,
    width: 350, // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
    borderRadius: 30,
    alignSelf: 'center', // Usar alignSelf em vez de alignItems no container para um item específico
  },
  logo: { // Um estilo mais específico para logo
    width: 200,
    height: 200,
    borderRadius: 30,
    marginBottom: 30,
    alignSelf: 'center',
  },
  inputsContainer: { // Para agrupar inputs e dar width 100%
    width: "100%",
  },
  verticalSpacer: { // Para espaçamento vertical entre botões
    marginVertical: 10,
  }
});