const express = require('express');
//ROUTER
const router = express.Router();
//HELPER 
const Project = require('../data/helpers/projectModel');

/* GET: api/projects 🛠*/
router.get('/', async (req, res) => {
    try {
        const projects = Project.get()
        res.status(200).json(projects);
    } 
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error getting all projects!'
        });
    };
});
//====================//



