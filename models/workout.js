const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        required: "What is the type of the exercise"
      },
      name: {
        type: String,
        required: "Enter the name of the exercise"
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Enter the duration of the exercise in minutes "
      },
      distance: {
        type: Number,
      },
    },
  ],
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;