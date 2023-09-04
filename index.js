import express from "express";
import autenticar from "./seguranca/Autenticacao.js";
import session from "express-session";
import rotaLogin from "./rotas/rotaLogin.js";
import Cliente from "./backend/modelo/Cliente.js";

const host = "0.0.0.0";
const porta = 3202;

const app = express();

app.use(
  session({
    secret: "Minh4ChAveS3crEt4",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30,
    },
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));
app.use("/clientes", (req, res) => {
  const cliente = new Cliente();
  cliente.consultar("").then((listaClientes) => {
    res.json(listaClientes);
  });
});

app.use("/login", rotaLogin);
app.use(autenticar, express.static("./protegido"));

app.listen(porta, host, () => {
  console.log("Servidor escutando em", host, porta);
});
