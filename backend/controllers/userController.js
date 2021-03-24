import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//Login: Check the email, and if it exists check if the password is correct
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            profileImg: user.profileImg,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

//Create a new user
const registerUser = asyncHandler(async (req, res) => {

    const { username, name, email, password } = req.body
    const profileImg = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        _id: new mongoose.Types.ObjectId(),
        name,
        username,
        email,
        password,
        profileImg
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            profileImg: user.profileImg,
            token: generateToken()
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// Get the user profile
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            profileImg: user.profileImg,
            bio: user.bio,
            email: user.email,
            city: user.city,
            address: user.address
        })
    } else {
        res.status(404)
        throw new Error("User Not Found")
    }
})

// Get all users profiles
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

const getUserByNameKeyword = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        },
    } : {}

    const users = await User.find({ ...keyword })
    res.json({ users })
})

// Update the profile
const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {

        user.name = req.body.name || user.name
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        user.profileImg = req.body.profileImg || user.profileImg
        user.bio = req.body.bio || user.bio
        user.city = req.body.city || user.city
        user.address = req.body.address || user.address


        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            username: updatedUser.username,
            email: updatedUser.email,
            profileImg: updatedUser.profileImg,
            bio: updatedUser.bio,
            city: updatedUser.city,
            address: updatedUser.address
        })
    } else {
        res.status(404)
        throw new Error("User Not Found")
    }
})



export {
    getUsers,
    authUser,
    registerUser,
    getUserProfile,
    getUserByNameKeyword,
    updateUserProfile
}