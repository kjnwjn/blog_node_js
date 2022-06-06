const newRouter = require("./news")
const newSite = require("./site")

function route(app){
    app.use("/news", newRouter);

    app.use("/", newSite);
}

module.exports = route;