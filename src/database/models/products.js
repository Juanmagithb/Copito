module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },

        stock: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        pack: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        dicount: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },

        categoryId: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },

        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

        productImage: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

        image2: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'products'
    }
    
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Movie.belongsTo(models.ProductsType, { // models.ProductsType -> ProductType es el valor de alias en productsTypes.js
            as: "productsTypes",
            foreignKey: "categoryId"
        })}

    return Product
};

