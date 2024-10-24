import fs from "fs"


let command = process.argv[2]
let fileName = process.argv[3]
let fileContent = process.argv[4]


const createFile = () => {
    if(!fileName || !fileContent)
    {
        console.log("Please enter valid file name and content")
        return 
    }
    fs.writeFile(fileName, fileContent, (err) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("File created with the name " + fileName)
        }
    })
}



const readFile = () => {
    if(!fileName)
    {
        console.log("Please provide a file name")
        return 
    }
    fs.readFile(fileName, "utf8", (err, data) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log(data)
        }
    })
}


const updateFile = () => {
    if(!fileName || !fileContent)
    {
        console.log("Please enter valid file name and content")
        return
    }
    fs.appendFile(fileName, `\n${fileContent}`, (err) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("File updated successfully")
        }
    })
}



const deleteFile = () => {
    if(!fileName)
    {
        console.log("Please provide a file name")
        return
    }
    fs.unlink(fileName, (err) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log(fileName + " deleted sucessfully")
        }
    })
}

const listFiles = () => {
    fs.readdir("./", (err, files) => {
        if(err)
        {
            console.log(err)
        } 
        else{
            for(let item of files)
            {
                console.log(item)
            }
        }

    })
}


if(command == "create")
{
    createFile()
}
else if(command == "read")
{
    readFile()
}
else if(command == "update")
{
    updateFile()
}
else if(command == "delete")
{
    deleteFile()
}
else if(command == "list")
{
    listFiles()
}
else
{
    console.log("Please provide a valid command")
}














