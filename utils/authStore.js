let usuarios = []; // array em memória

export function registrarUsuario({ cpf, nome, email, senha, avatar }) {
  const novoUsuario = { cpf, nome, email, senha, avatar };
  usuarios.push(novoUsuario);
  return novoUsuario;
}

export function loginUsuario(email, senha) {
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  return usuario || null;
}