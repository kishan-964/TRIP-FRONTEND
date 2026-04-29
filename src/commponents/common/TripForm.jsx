import React from 'react'
import z from 'zod'


const formSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    price: z.number ().positive("Price must be a positive number"),
    duration: durationSchema,
    startDate: z.date(),
    endDate: z.date(),
    location: z.string().min(3, "location must be at least 3 characters"),
    maxParticipants: z.number().positive("Max participants must be a positive number"),
    availabelSeats: z.number().positive("Available seats must be a positive number"),
    imageUrl: z.file()
})

const durationSchema = z.object({
    days: z.number().positive("Days must be a positive number"),
    nights: z.number().positive("Nights must be a positive number"),
})

const TripForm = () => {
  return (
    <div>TripForm</div>
  )
}

export default TripForm