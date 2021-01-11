import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUsers,
    getUserProfile,
    updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
router.route('/signup').get(getUsers).post(registerUser)


export default router