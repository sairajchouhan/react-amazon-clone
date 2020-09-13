const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HEXXnF4ldA99MqqO3KUJM9GZeKnF5K8tdveAHnSPq826q6hGu2kIpW7DsFEzUlwiye7fqNrCzHmr7AAe6oBwySX00q7WsXRvH'
);

// APIS

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('payment request recieved BOOm fir this amount>>>', total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      description: 'Amazon Clone service',
      shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
      amount: total, //sub units
      currency: 'usd',
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.send(err.message);
  }
});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);
