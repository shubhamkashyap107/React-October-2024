import fs from "fs"

// fs.mkdir("MyFolder", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("Directory made successfully")
//     }
// })


// fs.mkdirSync("FolderTwo")


// fs.writeFileSync("newFile", "qwerty")
// fs.writeFileSync("app.js", "console.log('Hello ji')")


const data = fs.readdirSync("MyFolder")
console.log(data)



console.log("HEHE")

