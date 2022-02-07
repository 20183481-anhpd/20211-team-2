const express = require("express");
const articleRoutes = require('./Article');

const apiRoutes = express.Router();

apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);
apiRoutes.use('/articles', articleRoutes);

module.exports = apiRoutes;