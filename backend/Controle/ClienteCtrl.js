import Cliente from "../modelo/Cliente.js";

export default class ClienteCtrl {
  gravar(req, res) {
    res.type("application/json");
    if (req.method === "POST" && req.is("application/json")) {
      const dados = req.body;
      const nome = dados.nome;
      const sobrenome = dados.sobrenome;
      const endereco = dados.endereco;
      const cpf = dados.cpf;
      const cidade = dados.cidade;
      const telefone = dados.telefone;
      const email = dados.email;
      if (nome && sobrenome && endereco && cpf && cidade && telefone && email) {
        const cliente = new Cliente(
          nome,
          sobrenome,
          endereco,
          cpf,
          cidade,
          telefone,
          email
        );
        cliente.gravar
          .then(() => {
            res.json({
              status: true,
              mensagem: "Cliente cadastrado com sucesso!",
            });
          })
          .catch((error) => {
            res.json({
              status: false,
              mensagem: "Erro ao cadastrar o cliente: " + error.message,
            });
          });
      } else {
        res.json({
          status: false,
          mensagem: "Informe todos os dados conforme a documentação",
        });
      }
    } else {
      res.json({
        status: false,
        mensagem: "Requisição inválida! Informe o cliente no formato JSON!",
      });
    }
  }
  atualizar(req, res) {
    res.type("application/json");
    if (req.method === "PUT" && req.is("application/json")) {
      const dados = req.body;
      const nome = dados.nome;
      const sobrenome = dados.sobrenome;
      const endereco = dados.endereco;
      const cpf = dados.cpf;
      const cidade = dados.cidade;
      const telefone = dados.telefone;
      const email = dados.email;
      if (nome && sobrenome && endereco && cpf && cidade && telefone && email) {
        const cliente = new Cliente(
          nome,
          sobrenome,
          endereco,
          cpf,
          cidade,
          telefone,
          email
        );
        cliente.atualizar
          .then(() => {
            res.json({
              status: true,
              mensagem: "Cliente atualizado com sucesso!",
            });
          })
          .catch((error) => {
            res.json({
              status: false,
              mensagem: "Erro ao atualizar o cliente: " + error.message,
            });
          });
      } else {
        res.json({
          status: false,
          mensagem: "Informe todos os dados conforme a documentação",
        });
      }
    } else {
      res.json({
        status: false,
        mensagem:
          "Requisição inválida! Informe o cliente no formato JSON para ser atualizado!",
      });
    }
  }

  excluir(req, res) {
    res.type("application/json");
    if (req.method === "DELETE" && req.is("application/json")) {
      const dados = req.body;
      const cpf = dados.cpf;

      if (cpf) {
        const cliente = new Cliente(cpf);
        cliente.excluir
          .then(() => {
            res.json({
              status: true,
              mensagem: "Cliente excluído com sucesso!",
            });
          })
          .catch((error) => {
            res.json({
              status: false,
              mensagem: "Erro ao excluir o cliente: " + error.message,
            });
          });
      } else {
        res.json({
          status: false,
          mensagem: "Informe o CPF do cliente para excluir",
        });
      }
    } else {
      res.json({
        status: false,
        mensagem:
          "Requisição inválida! Informe o cliente no formato JSON para ser excluído!",
      });
    }
  }
  consultar(req, res) {
    res.type("application/json");
    if (req.method === "GET") {
      let termo = req.query.termo;
      if (!termo) termo = "";
      const cliente = new Cliente();
      cliente
        .consultar(termo)
        .then((listaClientes) => {
          res.json(listaClientes);
        })
        .catch((error) => {
          res.json({
            status: false,
            mensagem: "Erro ao consultar o cliente: " + error.message,
          });
        });
    } else {
      res.json({
        status: false,
        mensagem:
          "Requisição inválida! Informe o cliente no formato JSON para ser consultado!",
      });
    }
  }
}
