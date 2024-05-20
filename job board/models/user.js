module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Other fields
  });

  User.associate = (models) => {
    User.hasMany(models.Job, {
      foreignKey: 'userId',
      as: 'jobs',
    });
  };

  return User;
};
