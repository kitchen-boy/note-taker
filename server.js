const express = require('express');
const app = express();
const { notes } = require('./data/notes');
function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title ===query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(note => note.text === query.text);
    }
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