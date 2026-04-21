const express = require('express');
const router = express.Router();
const { getHealthAnalysis, getDietRecommendations } = require('../controllers/healthController');

router.get('/analysis/:userId', getHealthAnalysis);
router.get('/recommendations/:userId', getDietRecommendations);

module.exports = router;
