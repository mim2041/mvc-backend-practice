module.exports.getAllTools = (req, res, next) => {
    const { ip, query, params, body, headers } = req;
    console.log(ip, query, params, body, headers);
    res.send("got it");
}

module.exports.postAllTools = (req, res) => {
    console.log("all tools are posted");
}