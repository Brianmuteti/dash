module.exports=(sequelize,DataTypes)=>{

    const Booking=sequelize.define("Booking",{

        service: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        staff: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        start_time: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        end_time: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        amount: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        status: {
        type: DataTypes.STRING,
        default: 0,
        },
  });

    return Booking;
  };
