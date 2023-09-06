import Cliente from "../modelo/Cliente.js";
import conectar from "./Conexao.js";

export default class ClienteDAO {
  async gravar(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql =
        "INSERT INTO cliente (nome, sobrenome, endereco, cpf, cidade, telefone) VALUES (?, ?, ?, ?, ?, ?)";
      const parametros = [
        cliente.nome,
        cliente.sobrenome,
        cliente.endereco,
        cliente.cpf,
        cliente.cidade,
        cliente.telefone,
      ];
      await conexao.execute(sql, parametros);
      global.poolConexoes.releaseConnection(conexao);
    }
  }

  async atualizar(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql =
        "UPDATE cliente SET nome = ?, sobrenome = ?, endereco = ?, cidade = ?, telefone = ?, WHERE cpf = ? ";
      const parametros = [
        cliente.nome,
        cliente.sobrenome,
        cliente.endereco,
        cliente.cidade,
        cliente.telefone,
        cliente.cpf,
      ];
      await conexao.execute(sql, parametros);
      global.poolConexoes.releaseConnection(conexao);
    }
  }
  async excluir(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = "DELETE FROM cliente WHERE cpf = ? ";
      const parametros = [cliente.cpf];
      await conexao.execute(sql, parametros);
      global.poolConexoes.releaseConnection(conexao);
    }
  }
  async consultar(termo) {
    const conexao = await conectar();
    if (!termo) termo = "";

    const listaClientes = [];
    const sql = "SELECT * FROM cliente WHERE nome LIKE ?";
    const parametros = ["%" + termo + "%"];
    const [rows] = await conexao.query(sql, parametros);
    for (const linha of rows) {
      const cliente = new Cliente(
        linha.nome,
        linha.sobrenome,
        linha.endereco,
        linha.cpf,
        linha.cidade,
        linha.telefone
      );
      listaClientes.push(cliente);
    }
    return listaClientes;
  }
}
