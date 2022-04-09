const express= require("express");
const router= express.Router();
const subjective= require("../controllers/subjective");
const objective= require("../controllers/objective");
const auth = require("../controllers/auth")



router.post('/question/subjective/create' , subjective.create)

router.get("/question/subjective/:id", subjective.findOne)

router.get("/question/subjective", subjective.findAllSubjective)

router.put('/question/subjective/:id', subjective.update)

router.delete('/question/subjective/:id', subjective.delete)


router.post('/question/objective/create' , objective.create)

router.get("/question/objective/:id", objective.findOne)

 router.get("/question/objective", objective.findAllobjective)

router.put('/question/objective/:id', objective.update)

router.delete('/question/objective/:id', objective.delete)

router.post('/question/googlelogin' , auth.login)



// var sql = require("mssql");


// var config = {
//     user: 'sa',
//     password: '1234',
//     server:'DESKTOP-0JEQGHT',
//     database: 'demo' ,
//     synchronize: true,
//     // port:"1433",
//     trustServerCertificate: true
// };


// router.get('/', (req,res)=>{
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);
//         console.log("Database connected");
//         // create Request object
//         var request = new sql.Request();
//           // console.log(request);
//         // query to the database and get the records
//         request.query('select * from Course', function (err, recordset) {
//            // console.log("No query found")
//             if (err) console.log(err.message)
            
//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// })



// //POST API
// router.post("/questions/create", (req , res)=>{
//     console.log(req.body);
// 	insertEmployees()
// });

// function insertEmployees() {
//     var dbConn = new sql.connect(config);
//     dbConn.connect().then(function () {
// 		var transaction = new sql.Transaction(dbConn);
// 		transaction.begin().then(function () {
// 			var request = new sql.Request(transaction);
//             request.query("INSERT INTO Course (CourseID,CourseName,CourseDescription) VALUES (req.body.id,req.body.name,req.body.description")
// 			.then(function 	() {
// 				transaction.commit().then(function (resp) {
//                     console.log(resp);
//                     dbConn.close();
//                 }).catch(function (err) {
//                     console.log("Error in Transaction Commit " + err);
//                     dbConn.close();
//                 });
// 			}).catch(function (err) {
//                 console.log("Error in Transaction Begin " + err);
//                 dbConn.close();
//             })
// 		}).catch(function (err) {
//             console.log(err);
//             dbConn.close();
//         }).catch(function (err) {
//         //12.
//         console.log(err);
//     });
//   });
// }



module.exports= router;
