const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Name must be 5 characters long']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Desription must be 5 characters long']
    },
    category: {
        type: String,
        // required: true
    },
    meetups: [{
        type: Schema.Types.ObjectId,
        ref: 'Meetup'
    }]
}, { timestamps: true });

GroupSchema.statics.addMeetup = async function (id, args) {
    const Meetup = mongoose.model('Meetup');

    console.log(id, args);

    // const group = await this.findById(id);

    // const meetup = await new Meetup({ ...args, group })
}

export default mongoose.model('Group', GroupSchema);