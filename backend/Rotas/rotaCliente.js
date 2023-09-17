import { Router } from "express";
import ClienteCtrl from "../Controle/ClienteCtrl.js";

const rotaCliente = Router();

const cliCTRL = new ClienteCtrl();

rotaCliente.get("/:termo", cliCTRL.consultar);
rotaCliente.get("/", cliCTRL.consultar);
rotaCliente.post("/", cliCTRL.gravar);
rotaCliente.put("/", cliCTRL.atualizar);
rotaCliente.delete("/", cliCTRL.excluir);

export default rotaCliente;
