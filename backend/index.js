// const express = require('express')
import express from 'express'
import fs from 'fs'
import path from 'path'
const app = express()

// Configura CORS in modo da consentire tutti i header richiesti dal client
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  // Consenti tutti i header che il client richiede
  const requestedHeaders = req.headers['access-control-request-headers'];
  if (requestedHeaders) {
    res.setHeader('Access-Control-Allow-Headers', requestedHeaders);
  } else {
    // Fallback per i header più comuni
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, Cache-Control, X-Auth-Token');
  }

  res.setHeader('Access-Control-Allow-Credentials', true);

  // Gestisci la richiesta preflight OPTIONS esplicitamente
  if (req.method === 'OPTIONS') {
    console.log('Ricevuta richiesta OPTIONS, header richiesti:', requestedHeaders || 'nessuno');
    return res.status(200).end();
  }

  next();
});

app.get('/', (request, response) => {
  response.send('<h1>Backend is running</h1>')
})

app.get('/api/balance/get-actual-balance', (request, response) => {

  const balance = getBalance()

  console.log('Richiesta balance');
  response.json({ balance: parseInt(balance) });
})

app.post('/api/balance/update-balance', (request, response) => {
  const { balance } = request.body
  updateBalance(balance)
  response.json({ message: 'Balance updated' })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Update balance in file
// TODO: Replace with database call
function updateBalance(balance) {
  function checkIsNumber(balance) {
    if (isNaN(balance)) {
      throw new Error('Balance is not a number')
    }
  }
  checkIsNumber(balance)
  const __dirname = 'C:\\DEV\\Sviluppi\\Altro\\Test\\WalletInSight\\WalletInSight\\backend\\'
  const balanceFilePath = path.join(__dirname, 'resources', 'balance.txt')
  fs.writeFileSync(balanceFilePath, balance.toString())
}

// Get balance from file
// TODO: Replace with database call
function getBalance() {
  const __dirname = 'C:\\DEV\\Sviluppi\\Altro\\Test\\WalletInSight\\WalletInSight\\backend\\'
  const balanceFilePath = path.join(__dirname, 'resources', 'balance.txt')
  const balance = fs.readFileSync(balanceFilePath, 'utf8')
  return balance
}

