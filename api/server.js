const express = require ('express');

const app = express();

// Listen for requests

app.listen(4000, () => {
    console.log('listening port 4000');
})