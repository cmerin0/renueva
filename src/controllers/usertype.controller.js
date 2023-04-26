import { UserType } from "../models/UserType.js";
import { User } from "../models/User.js";

export async function getUserTypes(req, res) {
  try {
    const userTypes = await UserType.findAll({
      atributes: ["id_type_user", "type_user"],
    });
    res.json(userTypes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUserType(req, res) {
  const { type_user} = req.body;
  console.log(req.body)
  try {
    let newUserType = await UserType.create(
      {
        type_user: type_user
      },
      {
        fields: ["type_user"],
      }
    );
    return res.json(newUserType);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getUserType(req, res) {
  const { id_type_user } = req.params;
  try {
    const userType = await UserType.findOne({
      where: {
        id_type_user: id_type_user,
      },
    });
    res.json(userType);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateUserType = async (req, res) => {
  try {
    const { id_type_user} = req.params;
    const { type_user } = req.body;

    const userType = await UserType.findByPk(id_type_user);
    userType.type_user = type_user;
    await userType.save();
    res.json(userType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteUserType(req, res) {
  const { id_type_user } = req.params;
  try {
    await User.destroy({
      where: {
        id_type_user: id_type_user,
      },
    });
    await UserType.destroy({
      where: {
        id_type_user: id_type_user,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUserTypeUsers(req, res) {
  const { id_type_user } = req.params;
  try {
    const users = await User.findAll({
      attributes: ["id_user", "id_type_user", "username", "password", "email"],
      where: { id_types_user: id_type_user },
    });
    res.json(users);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
