const path = require("path")
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const route = require("./routes")
const port = 3000;

app.use(express.static(path.join(__dirname,'public')))
// http logger
app.use(morgan("combined"));
// template engine
app.engine("hbs", handlebars.engine({
    'extname' : 'hbs',
}));
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));


// route initial
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
