import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName: "backend",
})
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));

    const messageSchema = new mongoose.Schema({
        name: String,
        email: String,
    });

    const Message = mongoose.model("Message", messageSchema);

const app = express();

// Using Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }))

// Setting up view engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index")
})

// app.get("/add", async (req, res) => {
//     await Message.create({name: "Anshul", email: "diamond439msn@gmail.com"});
//     res.send("Nice");
// });

app.get('/success', (req, res) => {
    res.render("success");
})

app.post('/contact', async (req, res) => {

    const {name, email} = req.body;

    await Message.create({ name: name, email: email});
    // res.render("success");
    res.redirect("/success");
})

app.get("/users", (req, res) => {
    res.json({
        users,
    })
})

app.listen(5000, () => {
    console.log("Server is running");
})