const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: role || 'Customer'
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user profile (health fields)
// @route   PUT /api/auth/profile/:id
// @access  Public (or Protected if middleware added)
const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            user.height = req.body.height || user.height;
            user.weight = req.body.weight || user.weight;
            user.age = req.body.age || user.age;
            user.gender = req.body.gender || user.gender;
            user.foodPreference = req.body.foodPreference || user.foodPreference;

            const updatedUser = await user.save(); // This will trigger the pre-save hook for BMI

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                height: updatedUser.height,
                weight: updatedUser.weight,
                age: updatedUser.age,
                gender: updatedUser.gender,
                foodPreference: updatedUser.foodPreference,
                bmi: updatedUser.bmi,
                bmiCategory: updatedUser.getBmiCategory()
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, authUser, updateUserProfile };
