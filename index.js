const mongoose = require('mongoose');
const express = require('express')
const Grocery = require('./models/accountStore');
const StoreAccount = require('./models/accountStore');
const app = express();
const port = 5000;

mongoose.connect("mongodb+srv://productstore:12345@cluster0.gjc3ffb.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });



  const newGrocery = new Grocery({
    name: 'Apple',
    category: 'Fruits',
    price: 1.99,
    quantity: 10
  });
  const newStoreAccount = new StoreAccount({
    username: 'john_doe',
    password: 'password123',
    email: 'john@example.com'
  });



  app.get('/', (req, res) => {
    newStoreAccount.save()
  .then(() => {

    console.log('Datasaved successfully!');
  })
  .catch(err => {
    console.error('Error saving Data:', err);
  });

    res.send("HELLO");
  });
  

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


