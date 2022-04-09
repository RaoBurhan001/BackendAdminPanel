module.exports = (sequelize, Sequelize) => {
    const Subjective = sequelize.define("Subjective", {
    //   title: {
    //     type: Sequelize.STRING
    //   },
      description: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      category:{
        type: Sequelize.STRING
      }
    });
  
    return Subjective;
  };