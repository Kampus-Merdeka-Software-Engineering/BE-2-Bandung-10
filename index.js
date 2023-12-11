require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const { prisma } = require("./config/prisma");
// const bookingRouter = require("./routes/booking.router");
// const roomsRouter = require("./routes/rooms.router");
const { bookingRouter } = require("./router/booking.router");
const { roomsRouter } = require("./router/rooms.router");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	res.send("here is the response");
});

// Import Router Booking
app.use("/form", bookingRouter);

// import Router Rooms
app.use("/rooms", roomsRouter);

/*
//use bookingRouter
app.use('/form', bookingRouter);
app.use('/form:rooms_id', bookingRouter);

//use roomsRouter
app.use('/rooms', roomsRouter);
*/

app.all("*", async (req, res) => {
	res.json({
		message: "Routes you're looking is not found",
	});
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server is already running at ${PORT}`);
});
