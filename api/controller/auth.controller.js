import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Author } from "../models/author.model.js";

export const signup = async (req, res) => {
    try {
        const { name, profilePicture, description, username, email, password, accessKey } = req.body;

        if(accessKey !== process.env.ACCESS_KEY) return res.status(400).json({ message: "Invalid access key" });

        const isAnyAuthors = await Author.find();
        let position = 'author';

        if(isAnyAuthors.length === 0){
            position = 'owner';
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newAuthor = new Author({ position ,name, profilePicture, description, username, email, password: hashedPassword });
        const saveAuther = await newAuthor.save();

        res.status(201).json(saveAuther);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const signin = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const user = await Author.findOne({ username });
        if(!user) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const data = {
            id: user._id,
            username: user.username,
            position: user.position,
        }

        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "24h" });

        res.status(200).json({ message: "Sign in", token });
    } catch (error) {
        res.status(404).json(error);
    }
};

export const resetPassword = async (req, res) => {
    const id = req.userId;
    try {
        const { password, newPassword } = req.body;

        const user = await Author.findOne({ _id: id });
        if(!user) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const hashedPassword = await bcrypt.hash(newPassword, 12);
        await Author.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });

        res.status(200).json({ message: "Password updated" });
    } catch (error) {
        res.status(404).json(error);
    }
}