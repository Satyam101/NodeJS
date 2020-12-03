let fs = require("fs");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("your port is working now on port 3000 "))

app.use('/images', express.static('./images'));


app.get("/", (request, response) => {
    response.send("Welcome");
});

app.get("/list", (request, response) => {
    let result = "";
    const path = "E:\\GUVI Tasks\\Zen\\";
    let image;

    fs.readdir(path, "utf-8", (err, data) => {
        if (err) throw err;
        // console.log(data);

        data.forEach((elem) => {

            // result += `${elem}` + `<br>`
            let stats = fs.statSync(path + elem);

            if (stats.isDirectory()) {
                image = `<img src="images/folder.png" width="25px" height="25px">`;
            }
            else {
                image = `<img src="images/text.png" width="25px" height="25px">`;

            }
            result += `<div>` + image + elem + `</div>` + `<br>`;

        })
        response.send(result);

    })

})


