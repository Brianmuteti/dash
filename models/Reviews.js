module.exports = (sequelize, DataTypes) => {

    const Reviews = sequelize.define("Reviews", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Reviews;

}