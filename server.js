const express = require('express');
const app = express();
const { notes } = require('./data/notes');
function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title ===query.title);
    }
}
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

app.listen(3000, () => {
    console.log('API server now on port 3000!');
});