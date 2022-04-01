module.exports=(sequelize,DataTypes)=>{

    const Categories=sequelize.define("Categories",{


         category_name: {
            type: DataTypes.STRING,
            allowNull: false,
          }

          
    });
    Categories.associate = (models) => {
        Categories.hasMany(models.Services, {
         onDelete: "cascade",//If you delete a business all services related with it will be deleted
        });
       };
    return Categories;
  };
