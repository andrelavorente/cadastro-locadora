import ClienteDAO from "../Persistencia/ClienteDAO.js";
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

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  get sobrenome() {
    return this.#sobrenome;
  }

  set sobrenome(novoSobrenome) {
    this.#sobrenome = novoSobreome;
  }

  get endereco() {
    return this.#endereco;
  }

  set endereco(novoEndereco) {
    this.#endereco = novoEndereco;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(novoCpf) {
    this.#cpf = novoCpf;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(novoCidade) {
    this.#cidade = novoCidade;
  }

  get telefone() {
    return this.#telefone;
  }

  set telefone(novoTelefone) {
    this.#telefone = novoTelefone;
  }

  get email() {
    return this.#email;
  }

  set email(novoEmail) {
    this.#email = novoEmail;
  }

  toJSON() {
    return {
      nome: this.#nome,
      sobrenome: this.#sobrenome,
      endereço: this.#endereco,
      cpf: this.#cpf,
      cidade: this.cidade,
      telefone: this.#telefone,
      email: this.#email,
    };
  }
  async gravar() {
    const cliDAO = new ClienteDAO();
    await cliDAO.gravar(this);
  }

  async atualizar() {
    const cliDAO = new ClienteDAO();
    await cliDAO.atualizar(this);
  }

  async excluir() {
    const cliDAO = new ClienteDAO();
    await cliDAO.excluir(this);
  }

  async consultar(termo) {
    const cliDAO = new ClienteDAO();
    return await cliDAO.consultar(termo);
  }
}
