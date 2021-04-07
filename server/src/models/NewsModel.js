const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    readTime: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    feeds: [{
        type: 'ObjectId',
        ref: 'Feed'
    }],
    newsletter: {
        type: 'ObjectId',
        ref: 'Newsletter'
    }
});

const model = mongoose.model('News', NewsSchema);
module.exports = model;