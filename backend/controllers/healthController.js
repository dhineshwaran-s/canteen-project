const Order = require('../models/Order');
const User = require('../models/User');

// Keywords to detect fast food
const isFastFood = (itemName) => {
    const fastFoodKeywords = ['burger', 'pizza', 'fries', 'coke', 'soda', 'hot dog', 'sandwich', 'nuggets', 'fried'];
    return fastFoodKeywords.some(keyword => itemName.toLowerCase().includes(keyword));
};

// @desc    Get health analysis based on recent orders
// @route   GET /api/health/analysis/:userId
// @access  Public (or protected)
const getHealthAnalysis = async (req, res) => {
    try {
        const { userId } = req.params;

        // Fetch last 5 orders for the user, sort descending
        const recentOrders = await Order.find({ user: userId })
            .sort({ createdAt: -1 })
            .limit(5);

        if (!recentOrders || recentOrders.length === 0) {
            return res.json({
                message: "Not enough order history for analysis.",
                alert: null,
                fastFoodCount: 0
            });
        }

        let fastFoodItemCount = 0;
        let totalItemsAnalyzed = 0;

        recentOrders.forEach(order => {
            order.orderItems.forEach(item => {
                totalItemsAnalyzed++;
                if (isFastFood(item.name)) {
                    fastFoodItemCount++;
                }
            });
        });

        // The requirement: "If a user orders fast food frequently (example: more than 3 fast food items in the last 5 orders), detect unhealthy food habits."
        // We will interpret this as >3 fast food items across the last 5 orders.
        let alertMessage = null;
        if (fastFoodItemCount > 3) {
            alertMessage = "Health Alert: You have ordered fast food frequently. We recommend choosing healthy food today.";
        }

        res.json({
            message: "Health analysis complete",
            totalOrdersAnalyzed: recentOrders.length,
            totalItemsAnalyzed,
            fastFoodCount: fastFoodItemCount,
            alert: alertMessage
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Generic healthy menu dataset since there's no Menu model
const healthyMenu = {
    veg: [
        { name: 'Green Salad Bowl', calories: 150, description: 'Fresh veggies with olive oil' },
        { name: 'Fruit Salad', calories: 120, description: 'Assortment of fresh seasonal fruits' },
        { name: 'Quinoa Veggie Stir Fry', calories: 250, description: 'Nutritious quinoa with mixed vegetables' }
    ],
    'non-veg': [
        { name: 'Grilled Chicken Salad', calories: 220, description: 'Lean grilled chicken with greens' },
        { name: 'Baked Salmon with Asparagus', calories: 350, description: 'Omega-3 rich diet meal' },
        { name: 'Boiled Egg Whites', calories: 80, description: 'High protein low calorie snack' }
    ]
};

// @desc    Get diet suggestions based on user profile
// @route   GET /api/health/recommendations/:userId
// @access  Public (or protected)
const getDietRecommendations = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const pref = user.foodPreference || 'veg';
        let recommendations = healthyMenu[pref] || healthyMenu['veg'];

        let dietaryAdvice = "";
        const category = user.getBmiCategory();

        switch (category) {
            case 'Underweight':
                dietaryAdvice = "Your BMI indicates you are underweight. Consider adding more nutrient-dense foods and healthy carbs to your diet.";
                break;
            case 'Normal':
                dietaryAdvice = "Your BMI is in a healthy range. Keep up the good work and maintain a balanced diet.";
                break;
            case 'Overweight':
                dietaryAdvice = "Your BMI suggests you are overweight. We recommend our low-calorie and grilled food options.";
                break;
            case 'Obese':
                dietaryAdvice = "Your BMI indicates obesity. We highly recommend focusing on salads, fruits, and portion-controlled meals.";
                break;
            default:
                dietaryAdvice = "Please update your height and weight in your profile to get personalized BMI-based recommendations.";
        }

        res.json({
            bmi: user.bmi || null,
            category: category,
            foodPreference: pref,
            advice: dietaryAdvice,
            recommendedMenu: recommendations
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getHealthAnalysis, getDietRecommendations };
