const express = require('express');
const fs = require('fs');
const app = express();
const { notes } = require('./db/db');

function filterByQuery(query, notesArray) {
    let textWordsArray = [];
    let filteredResults = notesArray;
    if (query.textWords) {
        // Save textWords as a dedicated array.
        // If textWords is a string, place it into a new array and save.
        if (typeof query.textWords === 'string') {
            textWordsArray = [query.textWords];
        } else {
            textWordsArray = query.textWords;
        }
        // Loop through each word in the textWords array:
        textWordsArray.forEach(word => {
            /* Check the word against each title in the filteredResults array.
            It is initially a copy of the notesArray, 
            but here we're updating it for each word in the .forEach() loop.
            For each word being targeted by the filter, the filtered Results
            array will then contain only the entries that contain the word
            so at the end we'll have an array of notes that have every one 
            of the words when the .forEach() loop is finished.*/
            filteredResults = filteredResults.filter (
                note => note.textWords.indexOf(word) !== -1
            );
        });
    }
    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title ===query.title);
    }
    //if (query.text) {
        //filteredResults = filteredResults.filter(note => note.text === query.text);
    //}
    return filteredResults;
}
app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    console.log(req.query)
    res.json(results);
});

app.listen(3000, () => {
    console.log('API server now on port 3000!');
});