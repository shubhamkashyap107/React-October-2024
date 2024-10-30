import express from "express"
import cors from "cors"
import { v4 as uuidv4 } from 'uuid';

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

let blogs = [
    {
      id : uuidv4(),
      title: "Introduction to JavaScript",
      author: "Jane Doe",
      content: "JavaScript is a versatile programming language primarily used in web development...",
    },
    {
      id : uuidv4(),
      title: "Understanding the Box Model in CSS",
      author: "John Smith",
      content: "The CSS Box Model is a fundamental concept that affects the layout and spacing of elements on a webpage...",
    },
    {
      id : uuidv4(),
      title: "Getting Started with Node.js",
      author: "Alex Brown",
      content: "Node.js is a powerful runtime environment for executing JavaScript code on the server side...",
    },
    {
      id : uuidv4(),
      title: "Responsive Web Design Basics",
      author: "Emily White",
      content: "Responsive design ensures that a website looks good on all devices by using flexible grids and media queries...",
    }
]
  


app.get("/blogs", (req, res) => {
    res.json(blogs)
})

app.post("/newblog", (req, res) => {
  console.log("API RAN")
  // console.log(req.body)
  blogs.push({...req.body, id : uuidv4()})
  res.status(200).json({msg : "blog added"})
})


app.delete("/delete/:id", (req, res) => {
  console.log(req.params.id)

  const filteredBlogs = blogs.filter((item) => {
    return item.id != req.params.id
  })


  blogs = filteredBlogs
  console.log(blogs)

  res.status(200).json(filteredBlogs)

})







app.listen(8080, () => {
    console.log("Server running on 8080 PORT...")
})