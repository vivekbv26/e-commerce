
import User from "./user.schema.js";

// Create a new user
const createUser = async (name, email, password, contactNumber, dateOfBirth, gender, role, billingAddress, shippingAddress, paymentMethod) => {
  try {
    const user = new User({
      name,
      email,
      password,
      contactNumber,
      dateOfBirth,
      gender,
      role,
      billingAddress,
      shippingAddress,
      paymentMethod,
      purchases: {
        totalSpent: 0,
        count: 0
      }
    });
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
const updateUser = async (userId, name, email, contactNumber, dateOfBirth, gender, role, billingAddress, shippingAddress, paymentMethod) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        contactNumber,
        dateOfBirth,
        gender,
        role,
        billingAddress,
        shippingAddress,
        paymentMethod
      },
      { new: true }
    );
    return updatedUser;
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
