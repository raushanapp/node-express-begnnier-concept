const fsPromises = require("fs").promises;
const path = require("path");


// this is read the file 
// fs.readFile(path.join(__dirname,"files","start.txt"),"utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const fileOps = async() => {
    
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "start.txt"), "utf8");
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, "files", "start.txt"));
        await fsPromises.writeFile(path.join(__dirname, "files", "promisesWrite.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "files", "promisesWrite.txt"), "\n\nNice to meet you.");
        await fsPromises.rename(path.join(__dirname, "files", "promisesWrite.txt"), path.join(__dirname,"files","promisesComplete.txt"));
        const newData = await fsPromises.readFile(path.join(__dirname, "files", "promisesComplete.txt"), "utf8");
        console.log(newData)

    }
    catch (err) {
        console.error(err)
    }
}

fileOps()

// fs.writeFile(path.join(__dirname,"files","reply.txt"),"Nice to meet you.", (err) => {
//     if (err) throw err;
//     console.log("write complete");
//     fs.appendFile(path.join(__dirname,"files","reply.txt"),"\n\n Yes it.", (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"), err => {
//             if (err) throw err;
//         })
//         console.log("Rename complete")
//     })
    
// })


// exit uncaught errors

process.on("uncaughtException", err => {
    console.error(`there was unCaught error${err}`);
    process.exit(1);
})