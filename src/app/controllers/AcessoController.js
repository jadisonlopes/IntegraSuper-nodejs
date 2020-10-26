import users from '../data/Users';

class AcessoController {
  async index(req, res) {
    const { usuario } = req.params;
    const { senha } = req.query;

    const user = users.filter(element => element.user === usuario);

    const userNotExists = user.length < 1;
    if (userNotExists)
      return res.status(400).json({ error: 'Usuário não cadastrado!' });

    const invalidPassword = user[0].password !== (senha || '');
    if (invalidPassword)
      return res.status(400).json({ error: 'Senha inválida!' });

    return res.status(200).json({ acceso: true });
  }
}

export default new AcessoController();
