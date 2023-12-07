/*
const { prisma } = require("../config/prisma");

// Booking Controller

// Get Booking 
async function getBooking(req, res) {
  const booking = await prisma.booking.findMany();
	res.status(200).send(booking);
}


// Post Booking
async function postBooking(req, res) {
    // const { 
    //     fullname, 
    //     email, 
    //     phone, 
    //     rooms_id, 
    //     check_in, 
    //     check_out, 
    //     adults_amount,
    //     childs_amount } = req.body;
    const newBooking = await prisma.booking.create({
      data: {
        fullname: req.body.fullname, 
        email: req.body.email,
        phone: parseInt(req.body.phone), 
        rooms_id: parseInt(req.body.rooms_id), 
        check_in: req.body.check_in, 
        check_out: req.body.check_out, 
        adults_amount: parseInt(req.body.adults_amount),
        childs_amount: parseInt(req.body.childs_amount)
      }
    });
    res.status(201).json({
      success: true,
      message: 'Booking Created!',
      data: newBooking,
    });
  }

// Get Booking by rooms_id
async function getBooking(req, res) {
  const { rooms_id } = req.params;
	const products = await prisma.product.findMany({
		where: {
			rooms_id: parseInt(rooms_id),
		},
	});
	res.status(200).send(booking);
};

module.exports = { getBooking, postBooking };
*/