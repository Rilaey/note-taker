// require modules
const express = require('express')
const path = require('path')
const uniqid = require('uniqid')
const fs = require('fs')

// json file
const dataBase = require('../db/db.json')

// port
const PORT = 5501

// express function
const app = express()

// encoding url
app.use(express.urlencoded({ extended: false}))

// gain access to publix folder
app.use(express.static('public'));

// Serve the home page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Serve the notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// get api notes
app.get('/api/notes', (req, res) => {
  res.json(dataBase)
})

// post api notes
app.post('/api/notes', (req, res) => {
  // Let the client know that their POST request was received
  // res.json(`${req.method} request received`);
  console.log(req.body)
  res.send('worked')
  
    // // deconstruct assignment for the req.body
    // const { title, text } = req.body;

    // // review object
    // if (title && text) {
    //   // Variable for the object we will save
    //   const newNote = {
    //     title,
    //     text,
    //     noteId: uniqid()
    //   };
  
    //   let array = [];
    //   let newString = JSON.stringify(newNote)
    //   array.push(newString)

    //   fs.appendFile(dataBase, array, (err) =>
    //   err
    //     ? console.error(err)
    //     : console.log(
    //         `Review for ${newNote.title} has been written to JSON file`
    //       )
    // );

    //   const response = {
    //     status: 'success',
    //     body: newNote,
    //   };
  
    //   res.status(201).json(response);
    // } else {
    //   // if note has no text, throw 500 error
    //   res.status(500).json('Error in posting review');
    // }
})

// server listen
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})