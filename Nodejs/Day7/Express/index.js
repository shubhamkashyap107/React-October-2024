// import express from "express"
// const app = express()

// let count = 0;

// app.get("/", (req, res) => {
//     res.send("Hello world!!")
// })

// app.get("/home", (req, res) => {
//     res.status(200).send("This is the slash home route")
// })


// app.get("/about", (req, res) => {
//     res.status(200).send("This is the slash about route")
// })

// app.get("/contact", (req, res) => {
//     count++;

//     res.status(200).send(`the count is ${count}`)
// })


// const arr = [
//     {
//         name : "ishgdf",
//         age : 90,
//         url : "data:image/jpeg;base64,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",
//     },
//     {
//         name : "ishgdf",
//         age : 90
//     },
//     {
//         name : "ishgdf",
//         age : 90,

//     }
// ]



// app.post("/example", (req, res) => {
//     res.status(200).send(arr)
// })



// // app.put()
// // app.patch()
// // app.delete()




// app.listen(4567, () => {
//     console.log("Server running on port 4567")
// })


import express from "express"
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/okay", (req, res) => {
    res.send("Middleware chala")
})


app.get("/login", (req, res) => {
    res.send("slash home route")
})


app.post("/data", (req, res) => {
    console.log(req.body.username)
    res.send("Data is correct")
})


app.get("/qwerty", (req, res) => {
    // console.log(req.body)
    console.log(req.query)
    res.send("Data is correct")
})




app.listen(1234, () => {
    console.log("Server running on port 1234")
})