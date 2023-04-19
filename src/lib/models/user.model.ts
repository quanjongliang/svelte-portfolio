import mongoose from "mongoose";
export type UserModelType = {
  _id: string;
  username: string;
  password: string;
  email: string;
  fullName: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
).index({ username: "hashed" }, {});
export const KeyUserModel = "User";
export const UserModel =
  mongoose.models.User ??
  mongoose.model<UserModelType>(KeyUserModel, UserSchema);
