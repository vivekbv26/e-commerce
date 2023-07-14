import User from "./user.schema.js";

// Create a new user
const createUser = async (name, email) => {
  try {
    const user = new User({ name, email });
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// Get all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error getting users:", error);
  }
};

// Update a user by ID
const updateUser = async (userId, name, email) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    );
    return updateUser;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

// Delete a user by ID
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export { createUser, getAllUsers, deleteUser, updateUser };
