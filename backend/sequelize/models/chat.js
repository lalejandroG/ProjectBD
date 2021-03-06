module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('chat', {
        
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        nombre_chat: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {})

    return Chat
}