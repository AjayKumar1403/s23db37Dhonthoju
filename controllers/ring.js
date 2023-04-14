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
exports.ring_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    console.log(req.params.id)
    result = await ring.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };


   // Handle Costume update form on PUT.
    exports.ring_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await ring.findById( req.params.id)
    console.log("request parameter "+ req.params.id)
    // console.log("request body " + req.body)
    // Do updates of properties
    if(req.body.ring_Material)
    toUpdate.ring_Material = req.body.ring_Material;
    if(req.body.ring_Weight) toUpdate.ring_Weight = req.body.ring_Weight;
    if(req.body.ring_Cost) toUpdate.ring_Cost = req.body.ring_Cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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


// for a specific Costume.
// exports.costume_detail = async function(req, res) {
//     console.log("detail" + req.params.id)
//     try {
//     result = await Costume.findById( req.params.id)
//     res.send(result)
//     } catch (error) {
//     res.status(500)
//     res.send(`{"error": document for id ${req.params.id} not found`);
//     }
//     };
    


// Handle ring delete form on DELETE.
exports.ring_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: ring delete DELETE ' + req.params.id);
};


// Handle ring update form on PUT.
// exports.ring_update_put = function (req, res) {
//   res.send('NOT IMPLEMENTED: ring update PUT' + req.params.id);
// };



// VIEWS
// Handle a show all view
exports.ring_view_all_Page = async function (req, res) {
    try {
        thering = await ring.find();
        res.render('ring', { title: 'ring Search Results', results: thering });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


  
