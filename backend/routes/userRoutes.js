import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUsers,
    getUserProfile
} from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/profile').get(getUserProfile)
router.route('/signup').post(registerUser)
router.route('/').get(getUsers)

export default router