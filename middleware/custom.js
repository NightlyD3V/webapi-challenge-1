//CUSTOM MIDDLEWARE HERE
function validateProjectId(req, res, next) {
    const { id } = req.params.id;
    Project.get(id)
    .then()
}

module.exports = validateProjectId;