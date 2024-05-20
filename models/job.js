module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Other fields
  });

  Job.associate = (models) => {
    Job.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'employer',
    });
  };

  return Job;
};
