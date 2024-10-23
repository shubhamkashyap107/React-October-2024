import EventEmitter from "events"


const ee = new EventEmitter()
ee.on("greet", (naam) => {
    console.log("Welcome back, " + naam)
})
ee.on("bellrings", () => {
    console.log("Open the door")
})
ee.on("funtime", () => {
    console.log("Play the songs")
})
ee.on("dinnertime", () => {
    console.log("Bring the food")
})
ee.on("glassesempty", () => {
    console.log("Bring drinks from the fridge")
})

// ee.emit("bellrings")
// ee.emit("bellrings")
// ee.emit("bellrings")
// ee.emit("bellrings")
// ee.emit("funtime")


//,jhVSDjfhbsdfkbhj
ee.emit("greet")


