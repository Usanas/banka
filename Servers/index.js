const express = require('express');
const index = express();
index.use((req, rest,next) => {
    res.status(200).json({
        message: 'it works!'
    });
});

module.exports = index;
  

