import { loginHelper } from '../helpers';

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.send({ error: 'error' });
  }

  const token = loginHelper(username, password);

  res.json({
    success: true,
    message: 'User Authenticated',
    token,
  });
};

export default {
  login,
};
