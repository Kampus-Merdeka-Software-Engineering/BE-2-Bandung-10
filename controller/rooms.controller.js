/*
const { prisma } = require("../config/prisma");

// Booking Controller

// Get Rooms
 async function getRooms(req, res) {
	const rooms = await prisma.rooms.findMany();
	res.status(200).send(rooms);
};

// get rooms by id
async function getRooms(req, res) {
	const rooms = await prisma.rooms.findUnique({
		where: {
			id: parseInt(req.params.id),
		},
	});
	if (!rooms)
		res.status(404).json({
			message: "Catalog not found",
		});
	else res.status(200).json(rooms);
};

module.exports = { getRooms };
*/