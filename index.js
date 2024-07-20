const express = require('express');
const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    return res.json({ message: "Hello Docker" })
})

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
})