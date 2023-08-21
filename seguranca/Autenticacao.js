export default function autenticar(req, res, next) {
  if (req.session.usuarioLogado === true) {
    next();
  } else {
    res.redirect("/login.html");
  }
}
