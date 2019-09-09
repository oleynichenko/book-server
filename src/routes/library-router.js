const express = require(`express`);
const controller = require(`../controllers/library-controller`);
const libraryRouter = new express.Router();

libraryRouter.get(`/:langId/:libraryId`, controller.getLibrary);

module.exports = libraryRouter;
