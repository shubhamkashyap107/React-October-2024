import fs from "fs"

// fs.readFile("example.txt", "utf8" , (err, data) => {
//     if(err)
//     {
//         console.log(err)
//         console.log("Error aaya hai")  //// my name is khan, hehe
//     }
//     else
//     {
//         console.log(data)
//     }
// })


// let data = fs.readFileSync("example.txt", "utf-8")
// console.log(data)

// fs.writeFile("example.txt", "singham 3", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("File written successfully")
//     }
// })



// fs.writeFileSync("example.txt", "bol bachhan")


// fs.appendFile("example.txt", "\nkal ho na ho", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("File appended successfully")
//     }
// })


// fs.appendFileSync("example.txt", "\nsholay")


// fs.unlink("example.txt", (err) => {
//     if(err)
//     {
//         console.log(first)
//     }
//     else
//     {
//         console.log("File deleted successfully")
//     }
// })


// fs.unlinkSync("abc.txt")


let data = fs.readFileSync("lyrics.txt", "utf-8")
data = data.replace("black", "pink")
fs.writeFileSync("lyrics.txt", data)




console.log("HEHE")