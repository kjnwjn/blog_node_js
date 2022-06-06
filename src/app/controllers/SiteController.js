class SiteController{
    index(req, res) {
        res.render("home");
      }
    search(req, res) {
        res.send("NEW SEARCH")
    }
}
module.exports = new SiteController;