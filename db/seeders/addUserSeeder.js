const bcrypt = require("bcryptjs");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				name: "Ansellma Putri",
				email: 'ansellmaputri@gmail.com',
				encryptedPassword: bcrypt.hashSync('123456', 10),
				roleId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Nisrina Rizkya",
				email: 'nisrina@gmail.com',
				roleId: null,
				encryptedPassword: bcrypt.hashSync('123456', 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Denaya Athalia",
				email: 'denaya@gmail.com',
				roleId: 1,
				encryptedPassword: bcrypt.hashSync('123456', 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			}
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users');
	}
};