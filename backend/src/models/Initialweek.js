import mogoose from 'mongoose';

const InitialWeekSchema = mogoose.Schema({
    morning: [{
        require: true,
        type: String
    }],
    evening: [{
        require: true,
        type: String
    }],
})

export default mogoose.model('InitialWeek', InitialWeekSchema)