class NewsController{
    index(req, res) {
        res.render("news");
    }
    show(req, res) {
        res.send("NEW DETAILSSSS")
    }
}
module.exports = new NewsController;