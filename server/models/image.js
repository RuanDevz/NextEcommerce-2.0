module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Image.associate = (models) => {
    Image.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
  };

  return Image;
};
