const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/save-location', (req, res) => {
    const data = req.body;
    console.log("Received data:", data);

    // Append the location and snapshot to the JSON file
    fs.appendFile('locations.json', JSON.stringify(data) + '\n', (err) => {
        if (err) {
            console.error("Error saving data:", err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
