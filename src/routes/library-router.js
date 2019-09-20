const express = require(`express`);
const controller = require(`../controllers/library-controller`);
const libraryRouter = new express.Router();

libraryRouter.get(`/langs/:libraryId/`, controller.getLibraryLangs);
libraryRouter.get(`/data/:libraryId/:langId`, controller.getLibraryData);

module.exports = libraryRouter;
