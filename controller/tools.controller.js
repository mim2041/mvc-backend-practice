const tools = [
    {id: 1, name:"asif"},
    {id: 2, name:"asif1"},
    {id: 3, name:"asif2"}
]

module.exports.getAllTools = (req, res, next) => {
    // const { ip, query, params, body, headers } = req;
    // console.log(ip, query, params, body, headers);
    // res.send("got it");

    // res.download(__dirname + "/tools.controller.js");
    // res.json({"name": "abc"});
    // res.redirect("/login");

    const {limit, page} = req.query;
    console.log(limit, page);
    res.json(tools.slice(0, limit));
}

module.exports.postAllTools = (req, res) => {
    console.log(req.body);
    tools.push(req.body);
    res.send(tools)
}



module.exports.getATools = (req, res) => {
    // console.log(req.params.id);
    // console.log("Get a tool");
    const {id } = req.params;
    console.log(id);
    // const filter = {_id: id};
    const foundTool = tools.find(tool => tool.id == Number(id));
    res.send(foundTool)
}

module.exports.updateTool = (req, res) => {
    // const newData = req.body;
    const {id} = req.params;
    const filter = {_id: id};

    const newData = tools.map(tool => {
        
    })
}