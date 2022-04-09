//const objective = require("../../../Quiz App API/src/models/objective");
const db = require("../models/index");
const Objective = db.objective;
const Op = db.Sequelize.Op;

// Create and Save a new Question
exports.create = (req, res) => {
   console.log(req.body)

   if(!req.body.description)
   {
    res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
   
    const objective = {
        description: req.body.description,
        option1 : req.body.option1,
        option2 : req.body.option2,
        option3 : req.body.option3,
        option4 : req.body.option4,
        category:req.body.category

      };
      console.log("objective",objective)
      // Save Question in the database
      Objective.create(objective)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Question."
          });
        });
    };


    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Objective.findByPk(id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving question with id=" + id
            });
          });
      };


      exports.update = (req, res) => {
        const id = req.params.id;
      
        Objective.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Question was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Question with id=${id}. Maybe Question was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Question with id=" + id
            });
          });
      };

      exports.delete = (req, res) => {
        const id = req.params.id;
      
        Objective.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Question was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Question with id=" + id
            });
          });
      };

      exports.findAllobjective = (req, res) => {
        Objective.findAll({ where: { category: "objective" } })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Questions."
            });
          });
      };



