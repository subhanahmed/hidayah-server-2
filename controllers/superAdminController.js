const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')

// @desc    Get all Students
// @route   GET /api/superAdmin/students
// @access  Private/SuperAdmin
const students = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': true })
  res.json(users)
})

// @desc    Get all Faculties
// @route   GET /api/superAdmin/faculties
// @access  Private/SuperAdmin
const faculties = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': false })
  res.json(users)
})

// @desc    Get all StudentsCount
// @route   GET /api/superAdmin/students/count
// @access  Private/SuperAdmin
const studentsCount = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': true }).count()
  res.json(users)
})

// @desc    Get all FacultiesCount
// @route   GET /api/superAdmin/faculties/count
// @access  Private/SuperAdmin
const facultiesCount = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': false }).count()
  res.json(users)
})

module.exports = {
  students,
  faculties,
  studentsCount,
  facultiesCount
} 
