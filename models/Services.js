module.exports=(sequelize,DataTypes)=>{

    const Services=sequelize.define("Services",{


         service_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          service_type: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          service_cost: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          service_hours: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    });
    return Services;
  };
