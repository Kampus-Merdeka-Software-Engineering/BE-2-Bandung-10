// BOOKING ROUTER
// GET > GET ALL > POST 
const express = require('express');
const { prisma } = require('../config/prisma');
const bookingRouter = express.Router();
// const { getBooking, postBooking } = require('../controller/booking.controller');

// GET all booking
bookingRouter.get("/", async (req, res) => {
	const booking = await prisma.booking.findMany({
        include: {
            Rooms: true,
        }
    });
	if (!booking) res.status(404).json({
		message: "Failed to make room booking",
	});
	res.status(200).json({
		message: "Successful in retrieving room booking data",
		data: booking,
	});
});

// GET all booking by id
bookingRouter.get("/:id", async (req, res) => {
	// const { id } = req.params;
	const booking = await prisma.booking.findMany({
        include: {
            Rooms: true,
        },
		where: {
			id: parseInt(req.params.id)
		},
	});
	// if (!rooms) res.status(404).send("Rooms not found");
	if (!booking) res.status(404).json({
		message: "Rooms Not Found",
	});
	res.status(200).send(rooms);
});

// POST Booking
bookingRouter.post("/", async (req, res) => {
    const { fullname, 
            email, 
            phone, 
            rooms_id, 
            check_in = new Date(Date.parse(check_in)), 
            check_out = new Date(Date.parse(check_out)),
            adults_amount,
            childs_amount } = req.body;
    // if (!rooms) res.status(404).json({
	// 	message: "Rooms Not Found",
	// });
    const newBooking = await prisma.booking.create({
        include: {
            Rooms: true,
        },
        data: {
            fullname,
            email, 
            phone, 
            rooms_id: parseInt(rooms_id), 
            check_in : new Date(Date.parse(check_in)), 
            check_out : new Date(Date.parse(check_out)),
            adults_amount: parseInt(adults_amount),
            childs_amount: parseInt(childs_amount),
        },
    });
    res.status(201).json({
        message: "Booking Rooms Created",
        data: newBooking,
    });
});

module.exports = { bookingRouter };

/*
// Booking Routes
routerB.get('/', getBooking);
routerB.get('/', getBooking);
routerB.post('/', postBooking);
module.exports = routerB;
*/
