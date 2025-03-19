// const express = require('express')
import express from 'express'
const app = express()

let mockedData = [
    {
      name: "Hannah Rickard",
      number: "06-51-99-56-83",
      id: 1
    },
    {
      name: "Hyun Namkoong",
      number: "10987654",
      id: 2
    },
    {
      name: "Courtney Martinez",
      number: "3691215",
      id: 3
    }
  ] // TODO: replace with actual data	

  app.get('/', (request, response) => {
      response.send('<h1>Backend is running</h1>')
  })

  app.get('/api/people', (request, response) => {
    // TODO: Remove
    // This api is used for testing purposes
      response.json(mockedData)
  })

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })

