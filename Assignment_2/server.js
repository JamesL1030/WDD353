const fs = require("fs")
const http = require ("http")
const path = require("path")
const url = require("url")

// creating the server
http.createServer(function (req, res) {

    let parsed = url.parse(req.url)
    let filename = path.parse(parsed.pathname)

// Fill in 
    let filen = filename.name == "" ? "index" : filename.name
    let ext = filename.ext == "" ? ".html" : filename.ext
    let dir = filename.dir == "/" ? "" : filename.dir + "/"
    let page = filename.name == "" ? "index.html" : filename.name

    // Removes / and replaces with a blank
    let f = (dir + filen + ext).replace("/", "")

    // create object for file types
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
    }

    if (f) {
        fs.readFile(f, function (err, data) {
            if (page) {
                if (mimeTypes.hasOwnProperty(ext)) {
                    res.writeHead(200, {
                       // 'Content-Type':
                    })
                    if (filename.ext == ".html") {
                        res.write("<script>let colorRed = 'red' </script>");
                        //res.write("<script>let page = ' "  +  + " ';</script>");                       
                    }             
                    res.end( data , 'utf-8')
                }
            }
        })
    }
}).listen("8080", () => {
    console.log("info", "Server is on port :" + 8080);
})