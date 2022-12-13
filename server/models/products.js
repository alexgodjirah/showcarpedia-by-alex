"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Products.belongsToMany(models.User, {
                through: models.Wishlist,
                foreignKey: "ProductId",
            });
        }
    }
    Products.init(
        {
            title: DataTypes.STRING,
            brand: DataTypes.STRING,
            year: DataTypes.INTEGER,
            kiloMeter: DataTypes.INTEGER,
            grade: DataTypes.INTEGER,
            category: DataTypes.STRING,
            photoProducts: DataTypes.ARRAY,
            description: DataTypes.STRING,
            delete: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Products",
        }
    );
    return Products;
};
