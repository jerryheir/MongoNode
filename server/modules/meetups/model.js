const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetupSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Title must be 5 characters at least']
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);