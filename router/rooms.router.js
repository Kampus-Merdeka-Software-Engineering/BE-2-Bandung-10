// ROOMS ROUTER
// GET > PUT > DELETE

const express = require('express');
const { prisma } = require('../config/prisma');
const roomsRouter = express.Router();
// const { getRooms } = require('../controller/rooms.controller');

//Rooms Router

// GET all rooms
roomsRouter.get("/", async (req, res) => {
	const rooms = await prisma.rooms.findMany();
	if (!rooms) res.status(404).json({
		message: "Rooms Not Found",
	});
	res.status(200).json({
		message: "Rooms Available",
		data: rooms,
	});
});

// GET rooms by id
roomsRouter.get("/:id", async (req, res) => {
	// const { id } = parseInt(req.params.id)
	const rooms = await prisma.rooms.findUnique({
		where: {
			id: parseInt(req.params.id)
		},
	});
	// if (!rooms) res.status(404).send("Rooms not found");
	if (!rooms) res.status(404).json({
		message: "Rooms Not Found",
	});
	res.status(200).send(rooms);
});

roomsRouter.post("/rooms", async (req, res) => {
    const { rooms } = req.body;
    // if (!rooms) res.status(404).json({
	// 	message: "Rooms Not Found",
	// });
    const newRooms = await prisma.rooms.create({
        data: {
            rooms: rooms,
        },
    });
    res.status(201).json({
        message: "Rooms Created",
        data: newRooms,
    });
});

// PUT Rooms
roomsRouter.put("/rooms/:id", async (req, res) => {
    const { id } = req.params;
    const { rooms } = req.params;
    const putRooms = await prisma.rooms.update({
        where: { id: parseInt(id) },
        data: { rooms: rooms },
    });
    res.status(201).json({
        message: "Rooms Updated",
        data: putRooms,
    });
});

// DELETE Rooms
roomsRouter.delete("/rooms/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.rooms.delete({
        where: { id: parseInt(id) },
    });
    res.status(201).json({
        message: `Rooms with id: ${id} successfully deleted`,
    });
});

module.exports = { roomsRouter };


// buat belajar
// Setelah melakukan import router hapus "/(nama yang kalian buat)""
// POST Rooms
/*
// Rooms Routes
routerR.get('/', getRooms);
module.exports = routerR;
*/

