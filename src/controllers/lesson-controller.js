const languagesStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);

class LessonsController {
  constructor(lessonsStore) {
    this.lessonsStore = lessonsStore;
  }

  getLessons = async (req, res) => {
    const articleId = req.params.articleId;
    const bookId = req.params.bookId;

    const lessonsData = await this.lessonsStore.getLessons(bookId, articleId);

    if (lessonsData && lessonsData.length > 0) {
      const lessons = lessonsData.map((l) => {
        const langNames = languagesStore.getLangNames(l.langId);
        const authorNames = authorsStore.getAuthorNames(l.authorId);

        const lesson = {src: l.src, langNames, authorNames};

        if (l.date) {
          lesson.date = l.date;
        }

        return lesson;
      });

      res.send(lessons);
    } else {
      res.send([]);
    }
  };
}

module.exports = LessonsController;
