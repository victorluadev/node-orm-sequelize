module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Matriculas', [
		{
			status: "confirmado",
			estudante_id: 4,
			turma_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 5,
			turma_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 7,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 8,
			turma_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "cancelado",
			estudante_id: 9,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "cancelado",
			estudante_id: 2,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
