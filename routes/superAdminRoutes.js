const express = require('express');
const router = express.Router()
const {
  students,
  faculties
} = require('../controllers/superAdminController');
const protect = require('../middleware/authMiddleware.js')

router.route('/students').get(protect, students)
router.route('/faculties').get(protect, faculties)

module.exports = router