const express = require(`express`);
const {async} = require(`../util`);

const LessonsController = require(`../controllers/lesson-controller`);
const getLessonsStore = require(`../stores/lessons-store`);

module.exports = async () => {
  const lessonRouter = new express.Router();

  const lessonsStore = await getLessonsStore();
  const controller = new LessonsController(lessonsStore);

  lessonRouter.get(
      `/:articleId/:bookId`,
      async(controller.getLessons)
  );

  return lessonRouter;
};
