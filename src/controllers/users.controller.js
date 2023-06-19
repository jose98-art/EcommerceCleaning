//importamos desde users.services
import { getAll, create } from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  const users = await getAll();
  res.json({ Message: "Users", users });
};

export const createUser = async (req, res) => {
  const usersObj = req.body;
  const newUser = await create(usersObj);
  if (newUser) {
    res.redirect("/");
  } else {
    res.redirect("/errorRegistro");
  }
};
