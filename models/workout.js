const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
  exercises: [
      {
          type: {
              type: String,
              required: "Enter an Exercise Type"
          },
          name: {
            type: String,
            required: "Enter an Exercise Name"
        },
        duration: {
            type: Number,
            required: "Enter a Duration of your exercise"
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }

      }
    ]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;