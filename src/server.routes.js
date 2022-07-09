const express = require('express');
const glob = require('glob');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) =>
  res.send('VR Software challenge API running.')
);

mountRoutes();

// Mounts all routes in based on file name.
function mountRoutes() {
  const files = glob.sync('src/resources/*/*.routes.js');

  files.forEach((routeFilename) => {
    const fileRelativePath = path.relative(__dirname, routeFilename);
    const routes = require(`./${fileRelativePath}`);
    const routeName = path.basename(routeFilename, '.routes.js');
    const url = `/${routeName}`;

    console.info(`${path.basename(routeFilename)} -> ${url}`);
    router.use(url, routes);
  });
}

module.exports = router;
