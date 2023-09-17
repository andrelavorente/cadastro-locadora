import mysql from "mysql2/promise";

export default async function conectar() {
  if (global.poolConexoes) {
    return await global.poolConexoes.getConnection();
  }

  global.poolConexoes = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "backendaluno2-ppiadsead",
    user: "aluno2-ppiadsead",
    password: "aluno2-ppiadsead",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    idleTimeout: 60000,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });

  return await global.poolConexoes.getConnection();
}
