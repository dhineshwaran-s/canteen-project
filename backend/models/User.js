const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Customer', 'Chef', 'Admin'],
        default: 'Customer'
    },
    // Health tracking fields
    height: { type: Number }, // in meters (e.g., 1.75)
    weight: { type: Number }, // in kilograms (e.g., 70)
    age: { type: Number },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    foodPreference: {
        type: String,
        enum: ['veg', 'non-veg'],
        default: 'non-veg'
    },
    bmi: { type: Number }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Pre-save hook for BMI calculation
userSchema.pre('save', function () {
    if (this.isModified('height') || this.isModified('weight')) {
        if (this.height && this.weight) {
            this.bmi = parseFloat((this.weight / (this.height * this.height)).toFixed(2));
        } else {
            this.bmi = undefined; // clear out bmi if height/weight are removed
        }
    }
});

// Helper method to deduce BMI Category
userSchema.methods.getBmiCategory = function () {
    if (!this.bmi) return 'Unknown';
    if (this.bmi < 18.5) return 'Underweight';
    if (this.bmi >= 18.5 && this.bmi < 25) return 'Normal';
    if (this.bmi >= 25 && this.bmi < 30) return 'Overweight';
    return 'Obese';
};

const User = mongoose.model('User', userSchema);
module.exports = User;
