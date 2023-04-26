import { User } from "../models/User.js";

export async function createUser(req, res) {
  try {
    const { username, password, email, id_type_user } = req.body;
    console.log(req.body)
    const newUser = await User.create({
      username,
      password,
      email,
      id_type_user
    });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.findAll({
      attributes: ["id_user", "username", "password", "email", "photo", "id_type_user"],
      order: [["id_user", "DESC"]],
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  const { id_user } = req.params;
  try {
    const user = await User.findOne({
      attributes: ["id_user", "username", "password", "email",  "photo", "id_type_user"],
      where: { id_user },
    });
    user.set(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  const { id_user } = req.params;
  try {
    await User.destroy({
      where: { id_user },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUser(req, res) {
  const { id_user } = req.params;
  try {
    const user = await User.findOne({
      where: { id_user },
      attributes: ["id_user", "id_type_user", "username", "password", "email"],
    });
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
