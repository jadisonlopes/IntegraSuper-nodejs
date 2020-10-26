import users from '../data/Users';

class UsuarioPermitidoController {
  async index(req, res) {
    const { usuario } = req.params;

    const userExists =
      users.filter(element => element.user === usuario).length > 0;

    if (userExists) return res.status(200).json({ permitted: true });
    return res.status(400).json({ error: 'Usuário não permitido!' });
  }
}

export default new UsuarioPermitidoController();
