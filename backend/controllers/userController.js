const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, isTeacher} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    if (isTeacher != '0' && isTeacher != '1') {
        res.status(400)
        throw new Error('Please select either Student or Teacher')
    }
    
    // check if user exists
    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        isTeacher   
    })

    let role = ''

    if (user.isTeacher === '0') {
        role = 'Student'
    }
    else if (user.isTeacher === '1') {
        role = 'Teacher'
    }

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isTeacher: role
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
    
    res.json({message: 'Register user'});
})

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'Login user'});
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async(req, res) => {
    res.json({message: 'User data display'});
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}