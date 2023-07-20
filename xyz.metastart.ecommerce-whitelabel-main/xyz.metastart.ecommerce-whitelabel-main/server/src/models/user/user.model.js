




import User, { Cart, OrderHistory } from "./user.schema.js";
import { validationResult } from 'express-validator';

// Create a new user
const createUser = async (userData) => {
  try {
    const errors = validationResult(userData);
    if (!errors.isEmpty()) {
      throw new Error('Validation failed');
    }

    const user = new User(userData);
    const savedUser = await user.save();

    // Create a new Cart and OrderHistory for the user
    const cart = new Cart({ userId: savedUser._id });
    const orderHistory = new OrderHistory({ userId: savedUser._id });

    await cart.save();
    await orderHistory.save();

    return savedUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Get all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error getting users:", error);
    throw error;
  }
};

// Update a user by ID
const updateUser = async (userId, userData) => {
  try {
    const errors = validationResult(userData);
    if (!errors.isEmpty()) {
      throw new Error('Validation failed');
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      userData,
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete a user by ID
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export { createUser, getAllUsers, deleteUser, updateUser };
