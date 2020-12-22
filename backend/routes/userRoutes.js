import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUsers
} from '../controllers/userController.js'

router.post('/login', authUser)
// router.route('/signup').post(registerUser)
// router.route('/').get(getUsers)

export default router