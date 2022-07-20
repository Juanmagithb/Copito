module.exports = (sequelize, dataTypes) => {

    let alias = 'ProductsType'; // esto debería estar en singular

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        categoryId: {
            type: dataTypes.STRING(50),
            allowNull: false
        }

    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'productsTypes'
    }


    const ProductType = sequelize.define(alias,cols,config);

    ProductType.associate = function (models) {
        ProductType.belongsToMany(models.Product, { // models.Product -> Product es el valor de alias en products.js
            as: "products",
            foreignKey: "categoryId"
        })}

    return ProductType
};