import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../../models/user/user.model.js";

// Create a new user
export const httpCreateUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

// Get all users
export const httpGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error getting users" });
  }
};

// Update a user by ID
export const httpUpdateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUser(id, name, email);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
};

// Delete a user by ID
export const httpDeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUser(id);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};
