const Project = require('../data/helpers/projectModel');
const Action = require('../data/helpers/actionModel');
//CUSTOM MIDDLEWARE HERE
function validateProjectId(req, res, next) {
    const { id } = req.params.id;
    Project.get(id)
    .then(project => {
        if(project) {
            req.project = project;
            res.status(200).json(project);
            next();
        } else {
            res.status(400).json({
                message: 'Invalid project ID!'
            });
        };
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: 'Error processing request!'
        })
    });
};

module.exports = validateProjectId;