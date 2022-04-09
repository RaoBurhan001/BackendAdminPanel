module.exports = (sequelize, Sequelize) => {
    const Objective = sequelize.define("Objective", {
    //   title: {
    //     type: Sequelize.STRING
    //   },
      description: {
        type: Sequelize.STRING
      },
      option1: {
        type: Sequelize.STRING
      },
      option2: {
        type: Sequelize.STRING
      },
      option3: {
        type: Sequelize.STRING
      },
      option4: {
        type: Sequelize.STRING
      },
      category:{
        type: Sequelize.STRING
      }
    //   isSelected:{
    //     type: Sequelize.BOOLEAN
    //   }
    });
  
    return Objective;
  };