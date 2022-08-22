const express = require('express');
const router = express.Router()
const {
  students,
  faculties
} = require('../controllers/superAdminController');
const protect = require('../middleware/authMiddleware.js')

router.route('/students').get(students)
router.route('/faculties').get(faculties)

module.exports = router
