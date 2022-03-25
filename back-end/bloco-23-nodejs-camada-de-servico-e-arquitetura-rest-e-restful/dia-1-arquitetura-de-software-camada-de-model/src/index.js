const express = require('express');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(express.json());

const userInputValidation = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName) {
    return res.status(400).json({
      error: true,
      message: "O campo 'firstName' é obrigatório"
    });
  }
  if (!lastName) {
    return res.status(400).json({
      error: true,
      message: "O campo 'lastName' é obrigatório"
    });
  }
  if (!email) {
    return res.status(400).json({
      error: true,
      message: "O campo 'email' é obrigatório"
    });
  }
  if (!password) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' é obrigatório"
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }
  next();
};

const userExistenceValidation = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.getById(id);

  if (!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }
  next();
};

app.post('/user', userInputValidation, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.get('/user', async (req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.get('/user/:id', userExistenceValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.getById(id);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.put('/user/:id', userInputValidation, userExistenceValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const user = await User.update({ id, firstName, lastName, email, password });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
