module.exports=(sequelize,DataTypes)=>{

    const Staffs=sequelize.define("Staffs",{

         staff_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          email: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          phone_no: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });
    return Staffs;
  };
