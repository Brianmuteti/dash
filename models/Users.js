module.exports=(sequelize,DataTypes)=>{

    const Users=sequelize.define("Users",{

          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          first_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          last_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          phone_no: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          role: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          country: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          state: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          city: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        
           password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          account_type: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },


    });

    Users.associate = (models) => {
      Users.hasMany(models.Business, {
       onDelete: "cascade",
      });
    };
    return Users;
  };