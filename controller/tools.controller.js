

module.exports.getAllTools = (req, res, next) => {
    const { ip, query, params, body, headers } = req;
    console.log(ip, query, params, body, headers);
    res.send("got it");

    // res.download(__dirname + "/tools.controller.js");
    // res.json({"name": "abc"});
    // res.redirect("/login");
}

module.exports.postAllTools = (req, res) => {
    console.log("all tools are posted");
}

module.exports.getATools = (req, res) => {
    console.log(req.params.id);
    console.log("Get a tool");
    res.send("get a tool")
}