const express = require('express');
//ROUTER
const router = express.Router();
//HELPER
const Action = require('../data/helpers/actionModel');
//MIDDLEWARE
const validateProjectId = require('../middleware/custom');

/* GET: /api/actions 🚕*/

//============================================//
router.get('/', async (req, res) => {
    try {
        const action = await Action.get()
        res.status(200).json(action);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error getting action data!'
        });
    };
});
//==========================================//

/* POST: /api/actions */

//=========================================//
router.post('/:id', [validateProjectId], async (req, res) => {
    const { id } = req.params;
    try {
        const created = await Action.insert(id)
        res.status(200).json({
            message: `${created} action created!`
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Action could not be created!'
        });
    };
});
//========================================//

/* PUT: /api/actions/:id */

//=======================================//
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const update = await Action.update(id)
        res.status(200).json({
            message: `${update} action updated!`
        })
    }
    catch(err) {
        console.log(err)
        res.status(500).json({
            message: `Error updating action with ID: ${id}`
        });
    };
});
//======================================//

/* DELETE: /api/actions/:id */

//======================================//
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Action.delete(id)
        res.status(200).json({
            message: `action with ID: ${id} has been deleted!`
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Errord deleting action with ID: ${id}`
        });
    };
});
//=====================================//

module.exports = router;