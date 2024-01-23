import express from "express";
import { insertUser, updateUser, forgotPassword, loginUser } from "../Controller/UserController.js";

const UserRouter = express.Router();

UserRouter.post("/register", (req, res) => {
    insertUser(req, res);
});

UserRouter.put("/update-user/:id", (req, res) => {
    updateUser(req, res);
});

UserRouter.post("/forgot-password", (req, res) => {
    forgotPassword(req, res);
});

UserRouter.post('/login', (req, res) => {
    loginUser(req, res);
})



export { UserRouter };

