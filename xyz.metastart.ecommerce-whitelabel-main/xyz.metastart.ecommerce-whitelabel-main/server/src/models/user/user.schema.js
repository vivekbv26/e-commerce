import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: false,
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ['admin', 'seller', 'customer'],
    default: 'customer',
  },
  purchases: {
    totalSpent: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  billingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  paymentMethod: {
    cardType: String,
    lastFourDigits: String,
    expiryDate: Date,
  },
  cart: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    },
  ],
  orderHistory: [
    mongoose.Schema.Types.ObjectId,
  ],
  wishList: [
    mongoose.Schema.Types.ObjectId,
  ],
});

const User = mongoose.model("User", userSchema);

export default User;

