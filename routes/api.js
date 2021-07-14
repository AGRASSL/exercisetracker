const router = require("express").Router()
const path = require("path");
const Workouts = require("../models/workout.js");


router.get("/api", (req,res) => {
   return console.log("hit")
})

router.get("/api/workouts", (req,res) => {
   Workouts.find({})
   .then(dbWorkouts => {
      console.log(dbWorkouts)
     res.json(dbWorkouts);
   })
   .catch(err => {
     res.status(400).json(err);
   });
});


router.post("/api/workouts", ({ body }, res) => {
   Workouts.create(body)
     .then(dbWorkouts => {
       res.json(dbWorkouts);
     })
     .catch(err => {
       res.status(400).json(err);
     });
 });

 router.put("/api/workouts:id", ({ body }, res) => {
   Workouts.update(body)
   .then(dbWorkouts => {
     res.json(dbWorkouts);
   })
   .catch(err => {
     res.status(400).json(err);
   });
 });

 router.get("/api/stats", (req,res) => {
  Workouts.find({})
  .then(dbWorkouts => {
     console.log(dbWorkouts)
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;


