const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request } = require('express');
const stripe = require('stripe')('sk_test_51HYJF9HyQfbcItgbgkHkvqfQJwQSi0Mk6av8ao0OOKhhKAVuHRUfgkSgdQGLPwkKQ22dX5HfgLdIFpjD3VCKAVcW00PaQy9Arv');

// - API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {

    const total = request.query.total;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd"
        })

        console.log('Payment Request receive', total);
        response.status(201).send({
            clientSecret: paymentIntent.client_secret
        });
    }
    catch (e) {
        response.status(404).send({
            error: e.message
        });
    }

})

// - Listen command 
exports.api = functions.https.onRequest(app)

//Example endopoint

//http://localhost:5001/clone-dbfb3/us-central1/api