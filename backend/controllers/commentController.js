import asyncHandler from 'express-async-handler'
import Comment from '../models/commentModel.js'

const createComment = asyncHandler(async (req, res) => {
    const { comment } = req.body

    const comment = new Comment({
        comment,
        username: req.user.username,
    })
})