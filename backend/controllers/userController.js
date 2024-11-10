const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    const {email, password, isTeacher} = req.body;

    if(!email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    if (isTeacher != 'student' && isTeacher != 'teacher') {
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
        email,
        password: hashedPassword,
        isTeacher   
    })

    let role = ''

    if (user.isTeacher === 'student') {
        role = 'Student'
    }
    else if (user.isTeacher === 'teacher') {
        role = 'Teacher'
    }

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
            isTeacher: role
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    console.log(req.body);

    if(!email || !password) {
        return res.status(400).json({message: 'Please complete all fields'});
    }

    const user = await User.findOne({email});
    
    if (!user) {
        return res.status(400).json({message: 'Your password or email is incorrect'});
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
        return res.status(400).json({message: 'Your password or email is incorrect'});
    }

    //if password matches, generate a token and respond with userData
    const token = generateToken(user._id);

    res.status(200).json({
        _id: user._id,
        email: user.email,
        token,
    });
});

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