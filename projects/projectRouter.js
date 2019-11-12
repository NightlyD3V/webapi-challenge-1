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
//======================//

/* POST: /api/projects */
router.post('/', async (req, res) => {
    const action = req.params.body;
    try {
        const projects = Project.insert(action)
        res.status(200).json({
            message: `${projects} project added!`
        }) 
    }   
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error adding new project!'
        });
    };
});
//=========================//

/* PUT: /api/projects/:id */
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const update = Project.update(id)
        res.status(200).json({
            message: `Project with ID: ${id} updated! to ${update}`
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error updating projet with ID: ${id}!`
        });
    };
});
//============================//

/* DELETE: /api/projects/:id */
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = Project.delete(id)
        res.status(200).json({
            message: `Project with ID: ${id} deleted!`
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error deleting project with ID: ${id}`
        });
    };
});
//===========================//

