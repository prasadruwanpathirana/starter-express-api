const express = require('express')
const app = express()
app.post('/validate', (req, res) => {
    const request = req.body;
        console.log(" req.body", JSON.stringify(req.body));
     return res.status(200).json({branchResult: false});
})
app.listen(process.env.PORT || 3000)
