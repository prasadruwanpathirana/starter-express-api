const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
     return res.status(200).json({branchResult: false});
})
app.listen(process.env.PORT || 3000)
