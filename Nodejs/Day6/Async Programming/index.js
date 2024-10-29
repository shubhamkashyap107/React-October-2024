

// fs.readFile("example.txt", "utf8", (err, data) => {
    //     if(err)
    //     {
//         console.log(err)
//     }
//     else
//     {
    //         console.log(data)
    //     }
    // })
    
    
    
    // import fs from "fs/promises"
    
    
    // fs.readFile("example.txt", "utf8")
    // .then((data) => {
        //     console.log(data)
        // })
        // .catch((err) => {
            //     console.log(err)
            // })
            
            // async function readFile()
            // {
                //     try {
                    //         const data = await fs.readFile("example.txt", "utf8")
                    //         console.log(data)
                    //     } catch (error) {
                        //         console.log(error)
                        //     }
                        // }
                        
                        // readFile()
                        
import fs from "fs/promises"
// import fs2 from "fs"
                        
// async function fetchAndSaveData()
// {
//     try
//     {
//         const response = await fetch("https://hp-api.onrender.com/api/characters")
//         const json = await response.json()
//         // console.log(json)
//         await fs.writeFile("data.txt", JSON.stringify(json))
//         console.log("data saved")

//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }

// fetchAndSaveData()


async function copyPasteAndDelete()
{

        const dataFromA = await fs.readFile("a.txt", "utf-8")
        fs.unlink("a.txt")
        await fs.writeFile("b.txt", dataFromA)

}

copyPasteAndDelete()

k.jShdfsjkhdf