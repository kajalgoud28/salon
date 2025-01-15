const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve static files (frontend)
app.use(express.static(__dirname));


// API or backend routes
app.get('/api', (req, res) => {
    res.json({ message: 'API is working' });
});

// Fallback for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
