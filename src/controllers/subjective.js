//const Subjective = require("../../../Quiz App API/src/models/Subjective");
const db = require("../models/index");
const Subjective = db.subjective;
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
   
    const subjective = {
        description: req.body.description,
        answer : req.body.answer,
        category:req.body.category

      };
      console.log("Subjective",subjective)
      // Save Question in the database
      Subjective.create(subjective)
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
      
        Subjective.findByPk(id)
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
      
        Subjective.update(req.body, {
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
      
        Subjective.destroy({
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

      exports.findAllSubjective = (req, res) => {
        Subjective.findAll({ where: { category: "subjective" } })
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



