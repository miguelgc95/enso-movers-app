import mongoose from "mongoose";

const InitialWeekSchema = new mongoose.Schema({
    day: {
        //require: true,
        type: String,
    },
    morning: [
        {
            //require: [true, 'algo fue mal en require'],
            type: [String, "algo fue mal en type"],
        },
    ],
    lunch: [
        {
            //require: [true, 'algo fue mal en require'],
            type: [String, "algo fue mal en type"],
        },
    ],
    evening: [
        {
            //require: [true, 'algo fue mal en require'],
            type: [String, "algo fue mal en type"],
        },
    ],
    night: [
        {
            //require: [true, 'algo fue mal en require'],
            type: [String, "algo fue mal en type"],
        },
    ],
});

export default mongoose.model("InitialWeek", InitialWeekSchema);
