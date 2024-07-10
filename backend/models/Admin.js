const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Admin = sequelize.define('Admin', {
    adminName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    adminPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    hooks: {
        beforeCreate: async (admin) => {
            const salt = await bcrypt.genSalt(10);
            admin.adminPassword = await bcrypt.hash(admin.adminPassword, salt);
        },
        beforeUpdate: async (admin) => {
            if (admin.changed('adminPassword')) {
                const salt = await bcrypt.genSalt(10);
                admin.adminPassword = await bcrypt.hash(admin.adminPassword, salt);
            }
        },
    },
});

Admin.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.adminPassword);
};

module.exports = Admin;
