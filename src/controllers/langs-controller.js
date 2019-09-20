const languagesStore = require(`../stores/languages-store`);
const NotFoundError = require(`../errors/not-found-error`);

const getLangsMenu = (req, res) => {
  const langId = req.params.langId;
  const langsIds = req.params.langsIds.split(`-`);

  const langData = languagesStore.getLangById(langId);

  if (langData) {
    const langMenu = languagesStore.getLangsMenu(langsIds, langId);

    res.send(langMenu);
  } else {
    throw new NotFoundError(`Lang '${langId}' not found`);
  }
};

module.exports = {
  getLangsMenu
};
