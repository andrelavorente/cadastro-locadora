export default class Cliente {
  #nome;
  #sobrenome;
  #endereco;
  #cpf;
  #cidade;
  #telefone;
  #email;
  constructor(nome, sobrenome, endereco, cpf, cidade, telefone, email) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#endereco = endereco;
    this.#cpf = cpf;
    this.cidade = cidade;
    this.#telefone = telefone;
    this.#email = email;
  }
}
