import express from "express";
import {
  httpCreateUser,
  httpGetAllUsers,
  httpUpdateUser,
  httpDeleteUser,
} from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/", httpCreateUser);
userRouter.get("/", httpGetAllUsers);
userRouter.put("/:id", httpUpdateUser);
userRouter.delete("/:id", httpDeleteUser);

export default userRouter;
