const express = require(`express`);
const controller = require(`../controllers/langs-controller`);
const libraryRouter = new express.Router();

libraryRouter.get(`/:langId/:langsIds`, controller.getLangsMenu);

module.exports = libraryRouter;
