const fs = require("fs");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const yaml = require("js-yaml");

const swaggerPath = path.join(__dirname, "./docs/swagger.yaml");
const swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, "utf8"));

module.exports = {
  swaggerUi,
  swaggerDocument,
};