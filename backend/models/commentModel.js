import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }

})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment