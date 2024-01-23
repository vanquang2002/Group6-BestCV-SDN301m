import { User } from "../Model/User.js";
import mongoose from 'mongoose';

/**
 * @description register user
 * @created 2024-01-18
 * @author Duong Thanh Luan
 * @param {*} req 
 * @param {*} res 
 */
const insertUser = async (req, res) => {
    try {
        const now = new Date();
        // check username is exist
        const user = await User.findOne({ username: req.body.username });
        // if username is not exist
        if (!user) {
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password: req.body.password,
                phone: req.body.phone,
                email: req.body.email,
                phone: req.body.phone,
                isVip: req.body?.isVip,
                isAdmin: req.body?.isAdmin,
                avatar: req.body?.avatar,
                bio: req.body?.bio,
                created_at: now,
            });
            
            await newUser.save();
            res.status(201).json({
                message: 'Insert Successfully!!!',
                data: newUser,
            });
        } else {
            res.status(400).send({
                message: 'Username is exist!!!',
            });
        }
        

    } catch (error) {
        res.status(500).send({
            message: 'Insert failure!!!',
            err: error.message
        });
    }

};

/**
 * @description Update user through id
 * @created 2024-01-18
 * @author Duong Thanh Luan
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) => {
    const userID = req.params.id;
    try {
        const user = await User.findById(userID);
        if (!user) {
            res.status(404).send({
                message: 'User not found!!!',
            });
        } else {
            user.password = req.body.password == null ? user.password : req.body.password;
            user.email = req.body.email == null ? user.email : req.body.email;
            user.phone = req.body.phone == null ? user.phone : req.body.phone;
            user.isVip = req.body?.isVip;
            user.isAdmin = req.body?.isAdmin;
            user.avatar = req.body?.avatar;
            user.bio = req.body?.bio;
            await user.save();
            res.status(200).json({
                message: 'Update ' + userID + ' Successfully!!!',
                data: user,
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Update failure!!!',
            err: error.message
        });
    }
};

/**
 * @description forgot password
 * @created 2024-01-18
 * @author Duong Thanh Luan
 * @param {*} req 
 * @param {*} res 
 */
const forgotPassword = async (req, res) => {
    const username = req.body.username;
    const newPassword = req.body.newPassword;
    try {
        const findedUser = await User.findOneAndUpdate({ username: username }, { password: newPassword }, { new: true });
        if (!findedUser) {
            res.status(404).send({
                message: 'Account is not exist',
            });
        } else {
            res.status(200).json({
                message: 'Change password successfully!!!',
                user: findedUser,
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Change password failure!!!',
            err: error.message
        });
    }
};


/**
 * @description forgot password
 * @created 2024-01-18
 * @author Duong Thanh Luan
 * @param {*} req 
 * @param {*} res 
 */
const loginUser = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({username: username, password: password});
    if(user){
        res.status(200).json({
            message: "Login successfully!",
            user: user
        });
    } else {
        res.status(400).json({
            message: "Login Fail! Check Username And Password ",
            user: user
        });
    }
};


export { insertUser, updateUser, forgotPassword, loginUser }