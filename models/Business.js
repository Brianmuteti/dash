module.exports=(sequelize,DataTypes)=>{

    const Business=sequelize.define("Business",{

          business_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          business_type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          industry: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
          location: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          address_line_1: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          latitude: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          longitude: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          city: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          state: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          country: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          bookingurl: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          website: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          details: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
  });

  Business.associate = (models) => {
    Business.hasMany(models.Services, {
     onDelete: "cascade",//If you delete a business all services related with it will be deleted
    });

    Business.hasMany(models.Categories, {
      onDelete: "cascade",//If you delete a business all services related with it will be deleted
     });

    Business.hasMany(models.Booking, {
      onDelete: "cascade",//If you delete a business all services related with it will be deleted
     });
  
    Business.hasMany(models.Customers, {
      onDelete: "cascade",
     });
  

     Business.hasMany(models.Staffs, {
      onDelete: "cascade",
    });
   };
    return Business;
  };
