const express = require('express');
const app = express();

// Use process.env.PORT if available, otherwise default to 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});
