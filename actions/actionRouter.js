const express = require('express');
//ROUTER
const router = express.Router();
//HELPER
const Action = require('../data/helpers/actionModel');

/* GET: /api/actions 🚕*/
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
//====================//