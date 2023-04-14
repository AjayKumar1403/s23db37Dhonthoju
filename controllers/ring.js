var ring = require('../models/ring');
// List of all rings
exports.ring_list = async function (req, res) {
    //  res.send('NOT IMPLEMENTED: ring list');
    try {
        thering = await ring.find();
        res.send(thering);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific ring.
exports.ring_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: ring detail: ' + req.params.id);
};


// Handle ring create on POST.
exports.ring_create_post = async function (req, res) {
    
    console.log(req.body)
    let document = new ring();
   
    document.ring_Material = req.body.ring_Material;
    document.ring_Weight = req.body.ring_Weight;
    document.ring_Cost = req.body.ring_Cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle ring delete form on DELETE.
exports.ring_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: ring delete DELETE ' + req.params.id);
};


// Handle ring update form on PUT.
exports.ring_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: ring update PUT' + req.params.id);
};



// VIEWS
// Handle a show all view
exports.Book_view_all_Page = async function (req, res) {
    try {
        thering = await ring.find();
        res.render('ring', { title: 'ring Search Results', results: thering });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


  
