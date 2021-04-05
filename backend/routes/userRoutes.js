import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUsers,
    getUserProfile,
    updateUserProfile,
    getUserByNameKeyword,
    getUserByUsername,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.get('/', getUserByNameKeyword)
router.get('/:username', protect, getUserByUsername)
router.post('/login', authUser)
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
router.route('/signup').get(getUsers).post(registerUser)


export default router