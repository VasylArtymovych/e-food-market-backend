const asyncHandler = require('express-async-handler');
// const fs = require('fs/promises');
// const { CustomError } = require('../helpers');
// const { config } = require('../config');
const { testService } = require('../services');

class TrackController {
  // test controller !!!!!!!!!!!!!:
  getAll = asyncHandler(async (req, res) => {
    const users = await testService.getAll();

    res.status(200).json({ status: 'Ok', message: 'test request', users });
  });

}

module.exports = new TrackController();
