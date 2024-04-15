const router = require("express").Router();

let Student = require("../models/Student");


router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student added!");
    }).catch((err) => {
        console.log(err);
    })

})



router.route("/getAll").get((req,res) =>{

    Student.find().then((allStudents) => {

        res.json(allStudents);

    }).catch((err) => {
        console.log(err);
    })


})




router.route("/update/:id").put(async(req,res)=> {
    let userId = req.params.id;

    // me method eka destructure method eka
    const {name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
        res.status(200).send({status: "User updated"});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating user", error: err.message});
    })

    
})




router.route("/delete/:id").delete(async(req,res)=> {

    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
    
})


router.route("/findStudent/:id").get(async(req,res)=> {

    let userId = req.params.id;

    const foundStudent = await Student.findById(userId)
    .then((user) => {
        res.status(200).send({status: "User found",user});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with finding user", error: err.message});
    })
    
})









 






module.exports = router;